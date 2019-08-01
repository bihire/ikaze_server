const { Shop } = require('../../models');
const { UserInfo } = require('../../models');
const jwt = require('jsonwebtoken');
const express = require('express');
const app = express();

// We also need a secret to encode/decode our JWTs
app.set('appSecret', 'super-secret-secret');

module.exports = {
  async registerShop(req, res) {
    console.log('broo you are here');
    try {
      const decode = jwt.decode(req.headers.token, app.get('appSecret'));
      const user_allowed = (await decode.id) !== null && decode.approved === true;
      if (user_allowed) {
        const user_info = await UserInfo.findOne({
          where: {
            owner: decode.id,
          },
        });
        if (!user_info) {
          throw res.status(404).json({
            status: 'error',
            message: 'provide valid user information first',
          });
        }
        if (user_info) {
          const { name, shopEmail, description, genre, brand } = req.body;
          const newShop = await Shop.create(
            {
              name,
              description,
              shopEmail,
              genre,
              owner: decode.id,
              brand,
            },
            {
              fields: ['name', 'shopEmail', 'description', 'genre', 'owner', 'brand'],
            },
          );
          res.send({
            message: 'it passed',
            data: newShop,
            results: 'ok',
          });
        }
      }

      res.send({
        status: 'error',
        data: 'you have no rights to create a shop',
      });
    } catch (error) {
      res.status(500).send(`bro error: ${error}`);
    }
  },
  async getOne(req, res) {
    try {
      const { id } = req.params
      const shop= await Shop.findOne({
        where: {
          id
        },
      });
      if (shop == null) throw res.status(404).send({
        status: "error",
        data: "the shop doesn't exist"
      });
      res.send({
        status: "success",
        data: shop,
        results: 'ok',
      });
    } catch (error) {
      res.status(400).send(`bro error: ${error}`);
    }
  },
  async index(req, res) {
    try {
      const decode = jwt.decode(req.headers.token, app.get('appSecret'));
      const my_shops = await Shop.findAll({
        where: {
          owner: decode.id,
        },
      });
      res.send({
        message: 'it passed',
        data: my_shops,
        results: 'ok',
      });
    } catch (error) {
      res.status(400).send(`bro error: ${error}`);
    }
  },
  async update(req, res) {
    const decode = jwt.decode(req.headers.token, app.get('appSecret'));
    let { id } = req.params;
    let { name, shopEmail, description, genre } = req.body;
    try {
      let update_shop = await Shop.findAll({
        attributes: ['id', 'name', 'shopEmail', 'description', 'genre', 'owner'],
        where: {
          owner: decode.id,
          id,
        },
      });
      if (update_shop.length > 0) {
        update_shop.forEach(async shop => {
          await shop.update({
            name: name ? name : shop.name,
            shopEmail: shopEmail ? shopEmail : shop.shopEmail,
            genre: genre ? genre : shop.genre,
            description: description ? description : shop.description,
          });
        });
        res.json({
          status: 'success',
          data: update_shop,
          message: 'shop updated successfully',
        });
      } else {
        res.json({
          result: 'failed',
          data: {},
          message: 'Could not find a shop to update',
        });
      }
    } catch (error) {
      res.json({
        result: 'failed',
        data: {},
        message: `Can not update the shop. Error: ${error}`,
      });
    }
  },
  async delete(req, res) {
    try {
      console.log('bro you are here');
      const decode = jwt.decode(req.headers.token, app.get('appSecret'));
      const { id } = req.params;
      const delShop = await Shop.destroy({
        where: {
          id,
          owner: decode.id,
        },
      });
      if (delShop) {
        res.send({
          message: 'Shop was successfuly deleted',
          count: delShop,
        });
      }
      res.send({
        status: 'error',
        message: 'yyou have no rights to delete that shop',
        count: delShop,
      });
    } catch (error) {
      console.log(delShop);
      res.json({
        result: 'failed',
        message: `Can not delete the shop. Error: ${error}`,
      });
    }
  },
};
