const Sequelize = require("sequelize");

// const sequelize = new Sequelize("DigitalJustice", "digofjustice", "111222333", {
//   host: "192.168.0.110",
//   port: 49155,
//   dialect: "postgres",
//   logging: false,
// });

const sequelize = new Sequelize(
  "DigitalJustice",
  "DigitalJustice",
  "CONFMIREAMEGAPASSWORD",
  {
    host: "172.17.0.5",
    port: 5432,
    dialect: "postgres",
    logging: false,
  }
);

module.exports = sequelize;
