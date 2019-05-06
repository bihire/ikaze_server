const cloudinary = require('cloudinary')
const multer = require('multer')
const cloudinaryStorage = require('multer-storage-cloudinary')
const config = require('./config/config')

module.exports = (app) => {
  app.post('/', (req, res) => {
    cloudinary.config(
      config.cloud_name,
      config.api_key,
      config.api_secret
    )
  
    const storage = cloudinaryStorage({
      cloudinary: cloudinary,
      folder: "demo",
      allowedFormats: ["jpg","png","jpeg"],
      transformation: [{width: 500, height: 500, crop: "limit"}]
    })

    const multerParser = multer({storage: storage})
    res.send('works bro')
  })
}