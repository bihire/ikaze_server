const { ShopLoc } = require('../../models');

module.exports = {
  // ------------- Shop Location ----------
  async registerLoc(req, res) {
    try {
      console.log(req.body);
      const { longitude, latitude } = req.body;
      const newShopLoc = await ShopLoc.create(
        {
          longitude,
          latitude,
        },
        {
          fields: ['longitude', 'latitude'],
        },
      );
      res.send({
        message: 'it passed',
        data: newShopLoc,
        results: 'ok',
      });
    } catch (error) {
      res.status(500).send(`bro error: ${error}`);
    }
  },
  async indexLoc(req, res) {
    try {
      const shopLoc = await ShopLoc.findAll({});
      res.send({
        message: 'it passed',
        data: shopLoc,
        results: 'ok',
      });
    } catch (error) {
      res.status(500).send(`bro error: ${error}`);
    }
  },
  async update(req, res) {
    let { id } = req.params;
    let { longitude, latitude } = req.body;
    try {
      let shopslatitude = await ShopLoc.findAll({
        attributes: ['id', 'longitude', 'latitude', 'ShopId'],
        where: {
          id,
        },
      });
      if (shopslatitude.length > 0) {
        shopslatitude.forEach(async shopLoc => {
          await shopLoc.update({
            ShopId: ShopId ? ShopId : ShopLoc.ShopId,
            longitude: longitude ? longitude : ShopLoc.longitude,
            latitude: latitude ? latitude : ShopLoc.latitude,
          });
        });
        res.json({
          result: 'ok',
          data: shopslatitude,
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
    const delShopLoc = await ShopLoc.destroy({
      where: {
        ShopId: req.params,
      },
    });
    res.send({
      message: 'Shop was successfuly deleted',
      count: delShopLoc,
    });
  },
};
