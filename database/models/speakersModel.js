const Sequelize = require("sequelize");
const dataBase = require("../connectDb");

const speakersModel = dataBase.define(
  "speaker",
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
    alt: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    firstName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    middleName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    acDegree: {
      type: Sequelize.STRING(1000),
      allowNull: false,
    },
    acTitle: {
      type: Sequelize.STRING(1000),
      allowNull: false,
    },
    honorTitle: {
      type: Sequelize.STRING(1000),
      allowNull: false,
    },
    position: {
      type: Sequelize.STRING(1000),
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING(1000),
      allowNull: false,
    },
  },
  { timestamps: false }
);

module.exports = speakersModel;
