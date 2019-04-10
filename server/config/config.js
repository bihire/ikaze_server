module.exports = {
  port: process.env.PORT || 5000,
  db: {
    database: process.env.DB_DATABASE || 'thebrand',
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || 'bobo1234',
    options: {
      dialect: process.env.DIALECT || 'postgres',
      host: process.env.HOST || 'localhost'

    }
  }
}