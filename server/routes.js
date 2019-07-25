const member = require('./routes/member');

module.exports = (app) => {
  app.use('/', member);
};