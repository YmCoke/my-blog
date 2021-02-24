const { Sequelize } = require("sequelize");

module.exports = new Sequelize("blog", "root", "88117298@zym", {
    host: "localhost",
    dialect: 'mysql',
    logging: false,
    timezone: "+08:00"
});