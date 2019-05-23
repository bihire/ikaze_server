const {
  Blanch,
  BlanchTel
} = require('../models')

module.exports = {
  async registerShop(req, res) {

    try {
      console.log(req.body)
      const {
        name,
        blanchEmail,
        brand
      } = req.body
      const newBlanch = await Blanch.create({
        name,
        brand,
        blanchEmail
      }, {
        fields: ["name", "blanchEmail", "brand"]
      })
      res.send({
        message: 'it passed',
        data: newBlanch,
        results: 'ok'
      })
    } catch (error) {
      res.status(500).send(`bro error: ${error}`)
    }
  },
  async index(req, res) {
    try {

      const blanches = await Blanch.findAll({})
      res.send({
        message: 'it passed',
        data: blanches,
        results: 'ok'
      })
    } catch (error) {
      res.status(500).send(`bro error: ${error}`)
    }
  },

  // ------------- Blanch Telephone ----------
  async registerTel(req, res) {

    try {
      console.log(req.body)
      const {
        owner,
        tel
      } = req.body
      const newBlanchTel = await BlanchTel.create({
        owner,
        tel
      }, {
        fields: ["owner", "tel"]
      })
      res.send({
        message: 'it passed',
        data: newBlanchTel,
        results: 'ok'
      })
    } catch (error) {
      res.status(500).send(`bro error: ${error}`)
    }
  },
  async indexTel(req, res) {
    try {

      const blanchTel = await BlanchTel.findAll({})
      res.send({
        message: 'it passed',
        data: blanchTel,
        results: 'ok'
      })
    } catch (error) {
      res.status(500).send(`bro error: ${error}`)
    }
  }
}