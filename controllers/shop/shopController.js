import Shop from '../../models';
import UserInfo from '../../models';

module.exports = {
  async registerShop(req, res) {
    try {
      let { owner } = req.params
      const user_info = await UserInfo.findOne({
        where: {
          owner: owner
        }
      })
      if (user_info) {
        const { name, shopEmail, description, genre, brand } = req.body;
        const newShop = await Shop.create(
          {
            name,
            description,
            shopEmail,
            genre,
            owner,
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
      res.send({
        status: 'error',
        data: shops,
        results: 'ok',
      });

      
    } catch (error) {
      res.status(500).send(`bro error: ${error}`);
    }
  },
  async index(req, res) {
    try {
      const shops = await Shop.findAll({});
      res.send({
        message: 'it passed',
        data: shops,
        results: 'ok',
      });
    } catch (error) {
      res.status(500).send(`bro error: ${error}`);
    }
  },
  async put(req, res) {
    let { id } = req.params;
    let { name, shopEmail, description, genre } = req.body;
    try {
      let shops = await Shop.findAll({
        attributes: ['id', 'name', 'shopEmail', 'description', 'genre', 'UserId'],
        where: {
          id,
        },
      });
      if (shops.length > 0) {
        shops.forEach(async shop => {
          await shop.update({
            UserId: UserId ? UserId : shop.UserId,
            name: name ? name : shop.name,
            shopEmail: shopEmail ? shopEmail : shop.shopEmail,
            genre: genre ? genre : shop.genre,
            description: description ? description : shop.description,
          });
        });
        res.json({
          result: 'ok',
          data: shops,
          message: 'update a Task successfully',
        });
      } else {
        res.json({
          result: 'failed',
          data: {},
          message: 'Cannot find Task to update',
        });
      }
    } catch (error) {
      res.json({
        result: 'failed',
        data: {},
        message: `Cannot update a Task. Error: ${error}`,
      });
    }
  },
  async delete(req, res) {
    const delShop = await Shop.destroy({
      where: {
        UserId: req.params,
      },
    });
    res.send({
      message: 'Shop was successfuly deleted',
      count: delShop,
    });
  },
};
