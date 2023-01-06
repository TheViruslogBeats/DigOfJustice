const ProgramListInfoModel = require("./database/models/programListInfoModel");
const ProgramListModel = require("./database/models/programListModel");
const ReportsModel = require("./database/models/reportsModel");
const SectionButtonsModel = require("./database/models/sectionButtonsModel");
const SectionListModel = require("./database/models/sectionListModel");
const NewsListModel = require("./database/models/newsListModel")

//nodeModules
const cookieParser = require("cookie-parser");
const express = require("express");
const cors = require("cors");
const compression = require("compression");
require("dotenv").config();

//wares
const dataBase = require("./database/connectDb");

const app = express();

const PORT = 5000;

const whitelist = [
  "https://virusbeats.ru",
  "https://conf.mirea.ru",
  "https://confadmin.virusbeats.ru",
  undefined,
];
app.use("/img", express.static("./files/images"));
app.use(compression());
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: function (origin, callback) {
      if (whitelist.indexOf(origin) !== -1) {
        callback(null, true);
      }
    },
  })
);

//Routers
const mainRouter = require("./routers/mainRouter");
const speakersModel = require("./database/models/speakersModel");
app.use("/api", mainRouter);
const adminRouter = require("./routers/adminRouter");
app.use("/admin", adminRouter);

const startServer = async () => {
  try {
    await dataBase.authenticate().then(async () => {
      await dataBase.sync({alter: true});
      console.log(
        "Connection with Data Base has been established successfully."
      );
    });
    await app.listen(PORT, () => {
      console.log(`Server started on PORT = ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
