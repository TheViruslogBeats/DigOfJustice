const ProgramListInfoModel = require("../database/models/programListInfoModel");
const ProgramListModel = require("../database/models/programListModel");
const SectionButtonsModel = require("../database/models/sectionButtonsModel");
const SectionListModel = require("../database/models/sectionListModel");

const { validationResult } = require("express-validator");
const ReportsModel = require("../database/models/reportsModel");
const e = require("express");

const getProgramms = async () => {
  let programsTemp = await ProgramListModel.findAll();
  let programs = [];
  programsTemp.map((prog) => {
    prog.dataValues.inform = [];
    programs.push(prog.dataValues);
  });

  let programsInfoTemp = await ProgramListInfoModel.findAll();
  let programsInfo = [];
  programsInfoTemp.map((prog) => {
    programsInfo.push(prog.dataValues);
  });

  programs.map((prog) => {
    prog.inform.push(
      ...programsInfo.filter((obj) => obj.programlistId === prog.id)
    );
  });

  programs.map((prog) => (prog.inform.length > 0 ? (prog.info = true) : null));
  return programs;
};

const getSections = async () => {
  let sectionButtonsTemp = await SectionButtonsModel.findAll();
  let sectionListTemp = await SectionListModel.findAll();

  let sectionButtons = [];
  let sectionList = [];
  let reportsList = await ReportsModel.findAll({ raw: true, where: {moderated: true} });
  sectionButtonsTemp.map((a) => sectionButtons.push(a.dataValues));
  sectionListTemp.map((a) => sectionList.push(a.dataValues));

  sectionList.map((a) => {
    if (a.questions.length > 0) {
      a.showArrow = true;
      a.hQuesions = true;
    }
    a.reports = reportsList.filter((rep) => a.id === rep.sectionlistId);
    if (a.reports.length > 0) {
      a.showArrow = true;
      a.hReports = true;
    }
  });
  sectionButtons.map((a) => {
    a.sectionList = [];
    a.sectionList.push(
      ...sectionList.filter((b) => b.sectionbuttonId === a.id)
    );
  });

  return sectionButtons;
};

class mainContorller {
  async getProgramm(req, res) {
    try {
      let programs = await getProgramms();
      let sections = await getSections();
      res.json({ programs, sections });
    } catch (error) {
      console.log(error);
      res.status(500).json("Ошибка сервера");
    }
  }

  async downloadFile(req, res) {
    try {
      res.download("./files/1.docx");
    } catch (error) {
      console.log(error);
      res.status(500).json("Ошибка при скачивании");
    }
  }

  async getRegisterSections(req, res) {
    try {
      let sections = await SectionListModel.findAll({
        where: { isSection: true, canRegister: true },
      });
      res.json(sections);
    } catch (error) {}
  }

  async sendReport(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(403).json({ message: "Ошибка сервера", errors });
      }
      let {
        fullName,
        email,
        activityType,
        studyPlaceAndSpecialy,
        workPlaceAndPosition,
        topic,
        section,
        fullNameSupervisor,
        rankSupervisor,
        positionSupervisor,
        formOfParticipation,
        acDegree,
      } = req.body;
      let candidate = await ReportsModel.findOne({ where: { email: email } });
      if (candidate) {
        return res
          .status(400)
          .json("Пользователь с таким email уже зарегистрирован");
      }
      let list = await SectionListModel.findOne({ where: { title: section } });
      if (activityType === 0) {
        activityType = "Учится";
      } else {
        activityType = "Работает";
      }
      if (formOfParticipation === 0) {
        formOfParticipation = "Очно";
      } else {
        formOfParticipation = "Онлайн";
      }
      await ReportsModel.create({
        fullName,
        email,
        activityType,
        studyPlaceAndSpecialy,
        workPlaceAndPosition,
        topic,
        section,
        fullNameSupervisor,
        rankSupervisor,
        positionSupervisor,
        formOfParticipation,
        acDegree,
        sectionlistId: list.dataValues.id,
      });
      return res.status(200).json("Успех");
    } catch (error) {
      console.log(error);
      res.status(500).json("Ошибка сервера");
    }
  }
}

module.exports = new mainContorller();
