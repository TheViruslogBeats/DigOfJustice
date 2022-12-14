const Sequelize = require("sequelize");
const dataBase = require("../connectDb");

const NewsListModel = dataBase.define("newslist", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  img: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  text: {
    type: Sequelize.STRING(10000),
    allowNull: false,
  },
});

module.exports = NewsListModel;
