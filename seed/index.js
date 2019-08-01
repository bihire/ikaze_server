const Promise = require('bluebird')
const { sequelize, MemberShip, Member, Shop, UserInfo } = require('../models')
const member_ships =require('./memberShip.json')
const members =require("./member.json")
const user_infos =require("./userInfo.json")
const shops =require("./shop.json")


sequelize
  .sync({
    force: true,
  })
  .then(async function () {
    await Promise.all(
        member_ships.map(member_ship => {
            MemberShip.create(member_ship)
        })
    )

    await Promise.all(
        members.map(member => {
            Member.create(member)
        })
    )

    await Promise.all(
        user_infos.map(user_info => {
            UserInfo.create(user_info)
        })
    )

    await Promise.all(
        shops.map(shop => {
            Shop.create(shop)
        })
    )
  });
