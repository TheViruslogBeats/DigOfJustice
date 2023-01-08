const Sequelize = require("sequelize");
const dataBase = require("../connectDb");

const NewsListModel = dataBase.define("newslist", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  title: {
    type: Sequelize.ARRAY(Sequelize.JSONB()),
  },
  place: {
    type: Sequelize.ARRAY(Sequelize.STRING(500)),
  },
  date: {
    type: Sequelize.STRING(500),
  },
  confData: {
    type: Sequelize.ARRAY(Sequelize.STRING(1000)),
  },
});

module.exports = NewsListModel;
