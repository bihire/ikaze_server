module.exports = {
  port: process.env.PORT || 5000,
  cloud_name: process.env.CLOUD_NAME || 'bihire',
  api_key: process.env.API_KEY || '728839234841112',
  api_secret: process.env.API_SECRET || 'JQwJOoAyGXNWxHWwQkUfRl5VMC4',
  db: {
    database: process.env.DB_DATABASE || 'the_brand',
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || 'bobo1234',
    options: {
      dialect: process.env.DIALECT || 'postgres',
      host: process.env.HOST || 'localhost'

    }
  }
}