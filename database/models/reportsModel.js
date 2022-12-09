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
    type: Sequelize.STRING(1000),
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING(1000),
    allowNull: false,
  },
  activityType: {
    type: Sequelize.STRING(1000),
    allowNull: false,
  },
  studyPlaceAndSpecialy: {
    type: Sequelize.STRING(1000),
  },
  workPlaceAndPosition: {
    type: Sequelize.STRING(1000),
  },
  acDegree: {
    type: Sequelize.STRING(1000),
    allowNull: false,
  },
  topic: {
    type: Sequelize.STRING(1000),
    allowNull: false,
  },
  comand: {
    type: Sequelize.ARRAY(Sequelize.JSONB)
  },
  section: {
    type: Sequelize.STRING(1000),
    allowNull: false,
  },
  fullNameSupervisor: {
    type: Sequelize.STRING(1000),
    allowNull: false,
  },
  rankSupervisor: {
    type: Sequelize.STRING(1000),
    allowNull: false,
  },
  positionSupervisor: {
    type: Sequelize.STRING(1000),
    allowNull: false,
  },
  formOfParticipation: {
    type: Sequelize.STRING(1000),
    allowNull: false,
  },
  moderated: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
});

ReportsModel.sync({ alert: true })

module.exports = ReportsModel;
