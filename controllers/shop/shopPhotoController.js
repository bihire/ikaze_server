const { Photo } = require('../../models');

module.exports = {
  // ------------- Shop locationPhotoephone ----------
  async registerPhoto(req, res) {
    try {
      console.log(req.body);
      const { coverPhoto, locationPhoto, shopPhoto } = req.body;
      const newShopPhoto = await Photo.create(
        {
          coverPhoto,
          locationPhoto,
          shopPhoto,
        },
        {
          fields: ['coverPhoto', 'locationPhoto', 'shopPhoto'],
        },
      );
      res.send({
        message: 'it passed',
        data: newShopPhoto,
        results: 'ok',
      });
    } catch (error) {
      res.status(500).send(`bro error: ${error}`);
    }
  },
  async indexShopPhoto(req, res) {
    try {
      const shopPhoto = await Photo.findAll({});
      res.send({
        message: 'it passed',
        data: shopPhoto,
        results: 'ok',
      });
    } catch (error) {
      res.status(500).send(`bro error: ${error}`);
    }
  },
  async update(req, res) {
    let { id } = req.params;
    let { coverPhoto, locationPhoto, shopPhoto } = req.body;
    try {
      let shopsPhoto = await Photo.findAll({
        attributes: ['id', 'coverPhoto', 'locationPhoto', 'ShopId', 'shopPhoto'],
        where: {
          id,
        },
      });
      if (shopsPhoto.length > 0) {
        shopslocationPhoto.forEach(async shopPics => {
          await shopPics.update({
            ShopId: ShopId ? ShopId : Photo.ShopId,
            coverPhoto: coverPhoto ? coverPhoto : Photo.coverPhoto,
            locationPhoto: locationPhoto ? locationPhoto : Photo.locationPhoto,
            shopPhoto: shopPhoto ? shopPhoto : Photo.shopPhoto,
          });
        });
        res.json({
          result: 'ok',
          data: shopsPhoto,
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
    const delPhoto = await Photo.destroy({
      where: {
        ShopId: req.params,
      },
    });
    res.send({
      message: 'Shop was successfuly deleted',
      count: delPhoto,
    });
  },
};
