const {
  Bookmark,
  User,
  Shop
} = require('../models')
const _ = require('lodash')
module.exports = {
  async index(req, res) {
    try {
      const {
        userId
      } = req.user.id
      const {
        shopId
      } = req.query
      const where = {
        UserId: userId
      }
      if (songId) {
        where.SongId = shopId
      }
      const bookmark = await BookmarkShop.findAll({
          where: where,
          include: {
            model: Shop
          }
        })
        .map(bookmark => bookmark.toJSON())
        .map(bookmark => _.extend({},
          bookmark.Shop,
          bookmark))
      res.send(
        bookmark
      )
    } catch (error) {
      res.status(500).send({
        error: 'error trying to fetch bookmark'
      })
    }
  },
  async post(req, res) {
    try {
      const userId = req.user.id
      const {
        songId
      } = req.body
      const bookmark = await Bookmark.findOne({
        where: {
          SongId: songId,
          UserId: userId
        }
      })
      if (bookmark) {
        return res.status(400).send({
          error: 'This bookmark already exist'
        })
      }
      console.log(songId, userId)
      const newBookmark = await Bookmark.create({
        SongId: songId,
        UserId: userId
      })
      res.send(newBookmark)
    } catch (error) {
      res.status(500).send({
        error: 'error trying to create bookmark'
      })
    }
  },
  async delete(req, res) {
    try {
      const userId = req.user.id
      const {
        bookmarkId
      } = req.params
      const bookmark = await Bookmark.findOne({
        where: {
          id: bookmarkId,
          UserId: userId
        }
      })
      console.log(userId)
      if (!bookmark) {
        return res.status(403).send({
          error: 'you do not have the right to access this bookmark'
        })
      }
      await bookmark.destroy()
      res.send(
        bookmark
      )
    } catch (error) {
      res.status(500).send({
        error: 'error deleting bookmark'
      })
    }
  }
}
