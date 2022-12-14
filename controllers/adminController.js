const SectionListMembersModel = require("../database/models/sectionListMembersModel");
const ProgramListInfoModel = require("../database/models/programListInfoModel");
const SectionButtonsModel = require("../database/models/sectionButtonsModel");
const ProgramListModel = require("../database/models/programListModel");
const SectionListModel = require("../database/models/sectionListModel");
const speakersModel = require("../database/models/speakersModel");
const ReportsModel = require("../database/models/reportsModel");
const NewsListModel = require("../database/models/newsListModel");

class adminController {
  async getProgramm(req, res) {
    try {
      let programs = await ProgramListModel.findAll({ raw: true });
      let programsInfo = await ProgramListInfoModel.findAll({ raw: true });

      return res.json({ program: { programs, programsInfo } });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Ошибка сервера", error });
    }
  }
  async getSections(req, res) {
    try {
      let sectionButtons = await SectionButtonsModel.findAll({ raw: true });
      let sectionList = await SectionListModel.findAll({ raw: true });
      let reportsList = await ReportsModel.findAll({ raw: true });
      let members = await SectionListMembersModel.findAll({ raw: true });
      return res.json({
        Sections: { sectionButtons, sectionList, reportsList, members },
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Ошибка сервера", error });
    }
  }
  async getExperts(req, res) {
    try {
      let speakers = await speakersModel.findAll({ raw: true });
      return res.json(speakers);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Ошибка сервера", error });
    }
  }
  async getNews(req, res) {
    try {
      let news = await NewsListModel.findAll({ raw: true });
      return res.json(news);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Ошибка сервера", error });
    }
  }
}

module.exports = new adminController();
