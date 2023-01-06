const SectionListMembersModel = require("../database/models/sectionListMembersModel");
const ProgramListInfoModel = require("../database/models/programListInfoModel");
const SectionButtonsModel = require("../database/models/sectionButtonsModel");
const ProgramListModel = require("../database/models/programListModel");
const SectionListModel = require("../database/models/sectionListModel");
const speakersModel = require("../database/models/speakersModel");
const ReportsModel = require("../database/models/reportsModel");
const fs = require("fs");

const { validationResult } = require("express-validator");

const getProgramms = async () => {
  let programs = await ProgramListModel.findAll({ raw: true });
  let programsInfo = await ProgramListInfoModel.findAll({ raw: true });

  programs.map((prog) => {
    (prog.inform = programsInfo.filter(
      (obj) => obj.programlistId === prog.id
    )).sort((a, b) => a.id - b.id),
      prog.inform.length > 0 ? (prog.info = true) : null;
  });

  return programs;
};

const getSections = async () => {
  let sectionButtons = await SectionButtonsModel.findAll({ raw: true });
  let sectionList = await SectionListModel.findAll({ raw: true });
  let reportsList = await ReportsModel.findAll({
    raw: true,
    where: { moderated: true },
  });
  let members = await SectionListMembersModel.findAll({ raw: true });

  sectionList.map((a) => {
    if (a.mainTheme.length > 0) {
      a.showArrow = true;
    }
    if (a.questions.length > 0) {
      a.showArrow = true;
      a.hQuesions = true;
    }
    a.reports = reportsList
      .filter((rep) => a.id === rep.sectionlistId)
      .sort((a, b) => a.id - b.id);
    if (a.reports.length > 0) {
      a.showArrow = true;
      a.hReports = true;
    }
    a.members = members
      .filter((memb) => a.id === memb.sectionlistId)
      .sort((a, b) => a.id - b.id);
    if (a.members.length > 0) {
      a.showArrow = true;
    }
  });
  sectionButtons.map((a) => {
    a.sectionList = sectionList.filter((b) => b.sectionbuttonId === a.id);
  });

  return sectionButtons;
};

class mainContorller {
  async getProgramm(req, res) {
    try {
      let programs = await getProgramms();
      let sections = await getSections();
      return res.json({ programs, sections });
    } catch (error) {
      console.log(error);
      return res.status(500).json("Ошибка сервера");
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
      return res.json(sections);
    } catch (error) {
      console.log(error);
      return res.status(500).json("Ошибка сервера");
    }
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
      return res.status(500).json("Ошибка сервера");
    }
  }

  async getExperts(req, res) {
    try {
      const { size, page } = req.body;
      let speakers = await speakersModel.findAll({ raw: true });
      return res.json(
        speakers
          .sort((a, b) => a.id - b.id)
          .slice((page - 1) * size, page * size)
      );
    } catch (error) {
      console.log(error);
      return res.status(500).json("Ошибка сервера");
    }
  }

  async getPressCenter(req, res) {
    try {
      let { API_URL } = await process.env;
      console.log(process.env);
      let data = fs.readdirSync("./files/images/pressCenter");
      data = data.map((f) => {
        return (f = `${API_URL}/img/pressCenter/${f}`);
      });
      return res.json(data);
    } catch (error) {
      console.log(error);
      return res.status(500).json("Ошибка сервера");
    }
  }
}

module.exports = new mainContorller();
