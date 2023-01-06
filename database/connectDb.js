const Sequelize = require("sequelize");

const sequelize = new Sequelize("DigitalJustice", "digofjustice", "111222333", {
  host: "192.168.0.110",
  port: 49155,
  dialect: "postgres",
  logging: false,
});

// const sequelize = new Sequelize(
//   "DigitalJustice",
//   "DigitalJustice",
//   "CONFMIREAMEGAPASSWORD",
//   {
//     host: "10.90.192.15",
//     port: 5432,
//     dialect: "postgres",
//     logging: false,
//   }
// );

module.exports = sequelize;
