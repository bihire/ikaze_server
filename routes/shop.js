const express = require('express');

const shopController = require('../controllers/shop/shopController');
// const memberController = require('../controllers/member/memberController')
const router = express.Router();

//  ------------- Shop ------------

router.post('/shop/create', shopController.registerShop);
router.patch('/shop/user/:id', shopController.update);
router.get('/shop/user/all', shopController.index);
router.get('/shop/user/:id', shopController.getOne);
router.delete('/shop/user/:id', shopController.delete);

// -------------- Member -----------------

// router.post('/member', memberController.registerMember);
// router.patch('/member/:member_id', memberShipController.update);
// router.get('/member/all', memberController.index);
// router.delete('/membership/:member_ship_id', memberShipController.delete);

module.exports = router;
