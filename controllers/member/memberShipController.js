const { MemberShip } = require('../../models');

module.exports = {
  async registerMemberShip(req, res) {
    try {
      const { member_ship } = req.body;
      const memberShip = await MemberShip.create(
        {
          member_ship,
        },
        {
          fields: ['member_ship'],
        },
      );
      res.send({
        message: 'it passed',
        data: memberShip,
        status: 'success',
      });
    } catch (error) {
      res.status(400).send({
        status: 'error',
        data: `bro error: ${error}`,
      });
    }
  },
  async index(req, res) {
    try {
      const memberShips = await MemberShip.findAll({});
      res.send({
        message: 'it passed',
        data: memberShips,
        status: 'success',
      });
    } catch (error) {
      res.status(400).send({
        status: 'error',
        data: `bro error: ${error}`,
      });
    }
  },
  async update(req, res) {
    let { member_ship_id } = req.params;
    let { member_ship } = req.body;
    try {
      let memberShips = await MemberShip.findAll({
        attributes: ['id', 'member_ship'],
        where: {
          id: member_ship_id,
        },
      });
      if (memberShips.length > 0) {
        memberShips.forEach(async memberShip => {
          await memberShip.update({
            member_ship: member_ship ? member_ship : MemberShip.member_ship,
          });
        });
        res.status(200).json({
          status: 'success',
          data: memberShips,
          message: 'update a MemberShip successfully',
        });
      } else {
        res.status(400).send({
          status: 'error',
          message: `could not find membership to update`,
          data: [],
        });
      }
    } catch (error) {
      res.status(400).json({
        status: 'error',
        data: [],
        message: `Cannot update a MemberShip. Error: ${error}`,
      });
    }
  },
  async delete(req, res) {
    const delMemberShip = await MemberShip.destroy({
      where: {
        id: req.params.member_ship_id,
      },
    });
    if (delMemberShip > 0) {
      res.status(200).send({
        message: 'MemberShip was successfuly deleted',
        count: delMemberShip,
      });
    } else {
      res.status(400).send({
        status: 'error',
        message: `could not find membership with id: ${req.params.member_ship_id}`,
        data: [],
      });
    }
  },
};
