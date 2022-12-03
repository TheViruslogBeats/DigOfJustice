const Sequelize = require("sequelize");
const dataBase = require("../connectDb");

const ProgramListInfoModel = dataBase.define(
  "programlistinfo",
  {
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
    fio: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    text: {
      type: Sequelize.STRING(1000),
      allowNull: false,
    },
  },
  { timestamps: false }
);

module.exports = ProgramListInfoModel;
