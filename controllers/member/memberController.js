const { Member } = require('../../models');
const jwt = require('jsonwebtoken');
const express = require('express');

const app = express();

// We also need a secret to encode/decode our JWTs
app.set('appSecret', 'super-secret-secret');

module.exports = {
  async registerMember(req, res) {
    try {
      const {
        user_name,
        first_name,
        last_name,
        email,
        password,
        approved,
        phone,
        memberShip_id,
      } = req.body;
      const member = await Member.create(
        {
          user_name,
          first_name,
          last_name,
          email,
          password,
          approved,
          phone,
          memberShip_id,
        },
        {
          fields: [
            'user_name',
            'email',
            'password',
            'first_name',
            'approved',
            'last_name',
            'phone',
            'memberShip_id',
          ],
        },
      );
      res.send({
        message: 'it passed',
        data: member,
        results: 'ok',
      });
    } catch (error) {
      res.status(500).send(`bro error: ${error}`);
    }
  },
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const User = await Member.findOne({
        where: { email },
      });
      if (!User) {
        throw res.status(401).json({
          message: 'Wrong email or password combination.',
        });
      }
      const isPassword = (await User.password) === password;
      if (!isPassword) {
        throw res.status(401).json({
          message: 'Wrong email or password combination.',
        });
      }
      const token = await jwt.sign(User.toJSON(), app.get('appSecret'));
      res.status(200).json({
        status: 'success',
        data: token,
      });
    } catch (error) {
      res.status(403).send({
        status: 'error',
        error: `invalid email or password:   ${error}`,
      });
    }
  },
  async index(req, res) {
    try {
      const members = await Member.findAll({});
      res.send({
        message: 'it passed',
        data: members,
        results: 'ok',
      });
    } catch (error) {
      res.status(500).send(`bro error: ${error}`);
    }
  },
  async update(req, res) {
    let { id } = req.params;
    let { userName, email, password, balance, approved, shopNumber } = req.body;
    try {
      let members = await Member.findAll({
        attributes: ['id', 'userName', 'email', 'password', 'balance', 'approved', 'shopNumber'],
        where: {
          id,
        },
      });
      if (members.length > 0) {
        Members.forEach(async member => {
          await member.update({
            userName: userName ? userName : Member.userName,
            email: email ? email : Member.email,
            password: password ? password : Member.password,
            approved: approved ? approved : Member.approved,
            balance: balance ? balance : Member.balance,
            shopNumber: shopNumber ? shopNumber : Member.shopNumber,
          });
        });
        res.json({
          result: 'ok',
          data: members,
          message: 'update a Member successfully',
        });
      } else {
        res.json({
          result: 'failed',
          data: {},
          message: 'Cannot find Member to update',
        });
      }
    } catch (error) {
      res.json({
        result: 'failed',
        data: {},
        message: `Cannot update a Member. Error: ${error}`,
      });
    }
  },
  async delete(req, res) {
    const delMember = await Member.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.send({
      message: 'Member was successfuly deleted',
      count: delMember,
    });
  },
};
