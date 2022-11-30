const Sequelize = require("sequelize");

const sequelize = new Sequelize("DigitalJustice", "postgres", "1235921", {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

module.exports = sequelize;
