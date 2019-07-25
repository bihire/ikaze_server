const {
  Product
} = require('../../models')

module.exports = {
  async registerShop (req, res) {
    
    try {
      console.log(req.body)
      const { member_id } = req.params;
      const {name, mainShopEmail, description} = req.body;
      const newMainShop = await MainShop.create({
        name, description, mainShopEmail, genre, member_id, brand
      }, {
        fields: ["name", "mainShopEmail", "description", "member_id"]
      });
      res.send({
        message: 'it passed',
        data: newMainShop,
        results: 'ok'
      });
    } catch (error) {
      res.status(500).send(`bro error: ${error}`);
    }
  },
  async index(req, res) {
    try {
      
      const mainShops = await MainShop.findAll({})
      res.send({
        message: 'it passed',
        data: mainShops,
        results: 'ok'
      })
    } catch (error) {
      res.status(500).send(`bro error: ${error}`)
    }
  },
  async put(req, res) {
      let {
        id
      } = req.params;
      let {
        name, mainShopEmail, description, genre
      } = req.body;
      try {
        let mainShops = await MainShop.findAll({
          attributes: ['id', "name", "mainShopEmail", "description", "member_id"],
          where: {
            id
          }
        });
        if (shops.length > 0) {
          shops.forEach(async (shop) => {
            await shop.update({
              UserId: UserId ? UserId : shop.UserId,
              name: name ? name : shop.name,
              mainShopEmail: mainShopEmail ? mainShopEmail : shop.mainShopEmail,
              genre: genre ? genre : shop.genre,
              description: description ? description : shop.description,

            });
          });
          res.json({
            result: 'ok',
            data: shops,
            message: "update a Task successfully"
          });
        } else {
          res.json({
            result: 'failed',
            data: {},
            message: "Cannot find Task to update"
          });
        }
      } catch (error) {
        res.json({
          result: 'failed',
          data: {},
          message: `Cannot update a Task. Error: ${error}`
        });
      }
    },
    async delete(req, res) {
      const delShop = await Shop.destroy({
        where: {
          UserId: req.params
        }
      })
      res.send({
        message: "Shop was successfuly deleted",
        count: delShop
      })
    }
}