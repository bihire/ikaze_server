const { ShopTel } = require('../../models');

module.exports = {
  // ------------- Shop Telephone ----------
  async registerTel(req, res) {
    try {
      console.log(req.body);
      const { owner, tel } = req.body;
      const newShopTel = await ShopTel.create(
        {
          owner,
          tel,
        },
        {
          fields: ['owner', 'tel'],
        },
      );
      res.send({
        message: 'it passed',
        data: newShopTel,
        results: 'ok',
      });
    } catch (error) {
      res.status(500).send(`bro error: ${error}`);
    }
  },
  async indexTel(req, res) {
    try {
      const shopTel = await ShopTel.findAll({});
      res.send({
        message: 'it passed',
        data: shopTel,
        results: 'ok',
      });
    } catch (error) {
      res.status(500).send(`bro error: ${error}`);
    }
  },
  async put(req, res) {
    let { id } = req.params;
    let { owner, tel } = req.body;
    try {
      let shopsTel = await ShopTel.findAll({
        attributes: ['id', 'owner', 'tel', 'ShopId'],
        where: {
          id,
        },
      });
      if (shopsTel.length > 0) {
        shopsTel.forEach(async shopTel => {
          await shopTel.update({
            ShopId: ShopId ? ShopId : ShopTel.ShopId,
            owner: owner ? owner : ShopTel.owner,
            tel: tel ? tel : ShopTel.tel,
          });
        });
        res.json({
          result: 'ok',
          data: shopsTel,
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
    const delShopTel = await ShopTel.destroy({
      where: {
        ShopId: req.params,
      },
    });
    res.send({
      message: 'Shop was successfuly deleted',
      count: delShopTel,
    });
  },
};
