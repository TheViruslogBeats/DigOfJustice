const Sequelize = require("sequelize");
const dataBase = require("../connectDb");
const SectionListModel = require("./sectionListModel");

const SectionButtonsModel = dataBase.define(
  "sectionbutton",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    text: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  { timestamps: false }
);

SectionButtonsModel.hasMany(SectionListModel);

module.exports = SectionButtonsModel;
