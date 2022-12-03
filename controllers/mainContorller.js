const ProgramListInfoModel = require("../database/models/programListInfoModel");
const ProgramListModel = require("../database/models/programListModel");

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
  return programs
};

class mainContorller {
  async getProgramm(req, res) {
    try {
      let programs = await getProgramms()
      res.json(programs);
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
