const { Shop, ShopTel, UserInfo } = require('../../models');
const express = require('express');
const app = express();
const jwt = require('jsonwebtoken')

// We also need a secret to encode/decode our JWTs
app.set('appSecret', 'super-secret-secret');

module.exports = {
    async addUserInfo(req, res) {
        try {
            const decode = jwt.decode(req.headers.token, app.get('appSecret'));
            const { mobo_phone,
                passport,
                national_id,
                transaction,
                balance
                } = req.body;
            const new_userInfo = await UserInfo.create(
                {
                    mobo_phone,
                    passport,
                    national_id,
                    transaction,
                    balance,
                    owner: decode.id,
                },
                {
                    fields: ['mobo_phone', 'passport', 'national_id', 'transaction','balance', 'owner'],
                },
            );
            res.send({
                message: 'it passed',
                data: new_userInfo,
                results: 'ok',
            });
        } catch (error) {
            res.status(400).send(`bro error: ${error}`);
        }
    },
    async index(req, res) {
        try {
            const shops = await Shop.findAll({});
            res.send({
                message: 'it passed',
                data: shops,
                results: 'ok',
            });
        } catch (error) {
            res.status(500).send(`bro error: ${error}`);
        }
    },
    async update(req, res) {
        let { id } = req.params;
        let { name, shopEmail, description, genre } = req.body;
        try {
            let shops = await Shop.findAll({
                attributes: ['id', 'name', 'shopEmail', 'description', 'genre', 'UserId'],
                where: {
                    id,
                },
            });
            if (shops.length > 0) {
                shops.forEach(async shop => {
                    await shop.update({
                        UserId: UserId ? UserId : shop.UserId,
                        name: name ? name : shop.name,
                        shopEmail: shopEmail ? shopEmail : shop.shopEmail,
                        genre: genre ? genre : shop.genre,
                        description: description ? description : shop.description,
                    });
                });
                res.json({
                    result: 'ok',
                    data: shops,
                    message: 'update a Task successfully',
                });
            } else {
                res.json({
                    result: 'failed',
                    data: {},
                    message: 'Cannot find Task to update',
                });
            }
        } catch (error) {
            res.json({
                result: 'failed',
                data: {},
                message: `Cannot update a Task. Error: ${error}`,
            });
        }
    },
    async delete(req, res) {
        const delShop = await Shop.destroy({
            where: {
                UserId: req.params,
            },
        });
        res.send({
            message: 'Shop was successfuly deleted',
            count: delShop,
        });
    },

    // ------------- Shop Telephone ----------
    async registerTel(req, res) {
        try {
            console.log(req.body);
            const { owner, tel } = req.body;
            const newShopTel = await Shop.create(
                {
                    owner,
                    tel,
                },
                {
                    fields: ['owner', 'tel'],
                },
            );
            res.send({
                message: 'it passed',
                data: newShopTel,
                results: 'ok',
            });
        } catch (error) {
            res.status(500).send(`bro error: ${error}`);
        }
    },
    async indexTel(req, res) {
        try {
            const shopTel = await ShopTel.findAll({});
            res.send({
                message: 'it passed',
                data: shopTel,
                results: 'ok',
            });
        } catch (error) {
            res.status(500).send(`bro error: ${error}`);
        }
    },
    async put(req, res) {
        let { id } = req.params;
        let { owner, tel } = req.body;
        try {
            let shopsTel = await ShopTel.findAll({
                attributes: ['id', 'owner', 'tel', 'ShopId'],
                where: {
                    id,
                },
            });
            if (shopsTel.length > 0) {
                shopsTel.forEach(async shopTel => {
                    await shopTel.update({
                        ShopId: ShopId ? ShopId : ShopTel.ShopId,
                        owner: owner ? owner : ShopTel.owner,
                        tel: tel ? tel : ShopTel.tel,
                    });
                });
                res.json({
                    result: 'ok',
                    data: shopsTel,
                    message: 'update a Task successfully',
                });
            } else {
                res.json({
                    result: 'failed',
                    data: {},
                    message: 'Cannot find Task to update',
                });
            }
        } catch (error) {
            res.json({
                result: 'failed',
                data: {},
                message: `Cannot update a Task. Error: ${error}`,
            });
        }
    },
    async delete(req, res) {
        const delShopTel = await ShopTel.destroy({
            where: {
                ShopId: req.params,
            },
        });
        res.send({
            message: 'Shop was successfuly deleted',
            count: delShopTel,
        });
    },
};
