const cloudinary = require('cloudinary')
const multer = require('multer')
const cloudinaryStorage = require('multer-storage-cloudinary')
const config = require('./config/config')
const shopController = require('./controllers/shopController')

module.exports = (app) => {
  // app.post('/', (req, res) => {
  //   cloudinary.config(
  //     config.cloud_name,
  //     config.api_key,
  //     config.api_secret
  //   )
  
  //   const storage = cloudinaryStorage({
  //     cloudinary: cloudinary,
  //     folder: "demo",
  //     allowedFormats: ["jpg","png","jpeg"],
  //     transformation: [{width: 500, height: 500, crop: "limit"}]
  //   })

  //   const multerParser = multer({storage: storage})

  //   console.log(req.file) // to see what is returned to you
  //   const image = {};
  //   image.url = req.file.url;
  //   image.id = req.file.public_id;
  //   Image.create(image) // save image information in database
  //     .then(newImage => res.json(newImage))
  //     .catch(err => console.log(err));
  //   res.send('works bro')
  // }
  // )
  app.post('/shops',shopController.registerShop)
  app.get('/shops',shopController.index)
  app.post('/shop/tel',shopController.registerTel)
  app.get('/shop/tel',shopController.indexTel)
}