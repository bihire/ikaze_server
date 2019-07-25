const { BookmarkShop } = require('../../models');
const _ = require('lodash');
module.exports = {
  async index(req, res) {
    try {
      const { member_id } = req.user.id;
      const { shop_id } = req.query;
      const where = {
        member_id: member_id,
      };
      if (shop_id) {
        where.shop_id = shop_id;
      }
      const bookmark = await BookmarkShop.findAll({
        where: where,
        include: {
          model: Shop,
        },
      })
        .map(bookmark => bookmark.toJSON())
        .map(bookmark => _.extend({}, bookmark.Shop, bookmark));
      res.send(bookmark);
    } catch (error) {
      res.status(500).send({
        error: 'error trying to fetch bookmark',
      });
    }
  },
  async post(req, res) {
    try {
      const member_id = req.user.id;
      const { shop_id } = req.body;
      const bookmark = await Bookmark.findOne({
        where: {
          shop_id: shop_id,
          member_id: member_id,
        },
      });
      if (bookmark) {
        return res.status(400).send({
          error: 'This bookmark already exist',
        });
      }
      console.log(songId, member_id);
      const newBookmark = await Bookmark.create({
        shop_id: shop_id,
        member_id: member_id,
      });
      res.send(newBookmark);
    } catch (error) {
      res.status(500).send({
        error: 'error trying to create bookmark',
      });
    }
  },
  async delete(req, res) {
    try {
      const member_id = req.user.id;
      const { bookmarkId } = req.params;
      const bookmark = await Bookmark.findOne({
        where: {
          id: bookmarkId,
          member_id: member_id,
        },
      });
      console.log(member_id);
      if (!bookmark) {
        return res.status(403).send({
          error: 'you do not have the right to access this bookmark',
        });
      }
      await bookmark.destroy();
      res.send(bookmark);
    } catch (error) {
      res.status(500).send({
        error: 'error deleting bookmark',
      });
    }
  },
};
