const Sequelize = require("sequelize");
const dataBase = require("../connectDb");
const ProgramListInfoModel = require("./programListInfoModel");

const ProgramListModel = dataBase.define(
  "programlist",
  {
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
    where: {
      type: Sequelize.STRING,
    },
    date: {
      type: Sequelize.STRING,
    },
    time: {
      type: Sequelize.STRING,
    },
    info: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
    infoOpened: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
  },
  { timestamps: false }
);

ProgramListModel.hasMany(ProgramListInfoModel);

module.exports = ProgramListModel;
