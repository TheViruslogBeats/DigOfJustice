//nodeModules
const cookieParser = require("cookie-parser");
const express = require("express");
const cors = require("cors");

//wares
const dataBase = require("./database/connectDb");

const app = express();

const PORT = 5000;

const whitelist = [
  "https://virusbeats.ru",
  "http://128.68.56.25",
  "http://localhost:3000",
  undefined,
];

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: function (origin, callback) {
      if (whitelist.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);

//Routers
const mainRouter = require("./routers/mainRouter");
app.use("/api", mainRouter);

const startServer = async () => {
  try {
    await dataBase.authenticate().then(() => {
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
