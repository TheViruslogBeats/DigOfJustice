const Sequelize = require("sequelize");
const dataBase = require("../connectDb");

const ReportsModel = dataBase.define("reports", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  fullName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  activityType: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  studyPlaceAndSpecialy: {
    type: Sequelize.STRING,
  },
  workPlaceAndPosition: {
    type: Sequelize.STRING,
  },
  acDegree: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  topic: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  section: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  fullNameSupervisor: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  rankSupervisor: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  positionSupervisor: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  formOfParticipation: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  moderated: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
});

module.exports = ReportsModel;
