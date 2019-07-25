const express = require('express');
const memberShipController = require('../controllers/member/memberShipController');
const memberController = require('../controllers/member/memberController');

const router = express.Router();

// ------------- MemberShip ------------

router.post('/membership', memberShipController.registerMemberShip);
router.patch('/membership/:member_ship_id', memberShipController.update);
router.get('/membership/all', memberShipController.index);
router.delete('/membership/:member_ship_id', memberShipController.delete);

// -------------- Member -----------------

router.post('/member', memberController.registerMember);
// router.patch('/member/:member_id', memberShipController.update);
router.get('/member/all', memberController.index);
// router.delete('/membership/:member_ship_id', memberShipController.delete);

module.exports = router;
