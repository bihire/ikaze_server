const joi = require('joi');

module.exports = {
  register(req, res, next) {
    const schema = {
      email: joi.string().email(),
      password: joi.string().regex(new RegExp('^[a-zA-Z0-9]{8,32}$')),
    };

    const { error, value } = joi.validate(req.body, schema);

    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'Please provide a valid emai address',
          });
          break;
        case 'password':
          res.status(400).send({
            error: `The password provided failed to match   the following rules:<br>
              1. It must have from 8 to 32 Characters.<br>
              2. It must contain only the following characters: lower case, upper case, numbers.
            `,
          });
          break;
        default:
          res.status(400).send({
            error: 'Invalid registration information',
          });
          break;
      }
    } else {
      next();
    }
  },
};
