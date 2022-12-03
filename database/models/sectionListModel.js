const Sequelize = require("sequelize");
const dataBase = require("../connectDb");
const ReportsModel = require("./reportsModel");

const SectionListModel = dataBase.define("sectionlist", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  date: {
    type: Sequelize.STRING,
  },
  time: {
    type: Sequelize.STRING,
  },
  place: {
    type: Sequelize.STRING,
  },
  showArrow: {
    type: Sequelize.BOOLEAN,
  },
  opened: {
    type: Sequelize.BOOLEAN,
  },
  hQuesions: {
    type: Sequelize.BOOLEAN,
  },
  questions: {
    type: Sequelize.ARRAY(Sequelize.STRING),
  },
  hReports: {
    type: Sequelize.BOOLEAN,
  },
});

SectionListModel.hasMany(ReportsModel)

module.exports = SectionListModel;
