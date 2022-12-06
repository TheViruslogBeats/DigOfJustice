const Sequelize = require("sequelize");
const dataBase = require("../connectDb");

const SectionListMembersModel = dataBase.define(
  "sectionlistmember",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    img: {
      type: Sequelize.STRING(1000),
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
  },
  { timestamps: false }
);

module.exports = SectionListMembersModel;
