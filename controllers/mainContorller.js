const ProgramListInfoModel = require("../database/models/programListInfoModel");
const ProgramListModel = require("../database/models/programListModel");
const SectionButtonsModel = require("../database/models/sectionButtonsModel");
const SectionListModel = require("../database/models/sectionListModel");

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

  sectionButtonsTemp.map((a) => sectionButtons.push(a.dataValues));
  sectionListTemp.map((a) => sectionList.push(a.dataValues));

  sectionList.map((a) => {
    if(a.questions.length > 0) {
      a.hQuesions = true
    }
    a.reports = []
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
}

module.exports = new mainContorller();
