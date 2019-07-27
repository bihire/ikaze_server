const member = require('./routes/member');
const shop = require('./routes/shop');

module.exports = (app) => {
  app.use('/', member);
  app.use('/', shop);
};
