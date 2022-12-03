const ProgramListInfoModel = require("./database/models/programListInfoModel");
const ProgramListModel = require("./database/models/programListModel");
const ReportsModel = require("./database/models/reportsModel");
const SectionButtonsModel = require("./database/models/sectionButtonsModel");
const SectionListModel = require("./database/models/sectionListModel");

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
    await dataBase.authenticate().then(async () => {
      await dataBase.sync({ force: true });
      await kek();
      await kek2();
      await kek3();
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

const kek = async () => {
  await ProgramListModel.create({
    title: "Торжественное открытие",
    where: "Малый зал Ученого совета",
    date: "9 ДЕКАБРЯ",
    time: "10:00",
    info: false,
    infoOpened: false,
  });
  await ProgramListModel.create({
    title: "Кофе-брейк",
    where: "",
    date: "9 ДЕКАБРЯ",
    time: "10:30",
    info: false,
    infoOpened: false,
  });
  await ProgramListModel.create({
    title: "Пленарное заседание",
    where: "Малый зал Ученого совета",
    date: "9 ДЕКАБРЯ",
    time: "10:50",
    info: false,
    infoOpened: false,
  });
  await ProgramListInfoModel.create({
    img: "https://cdn.discordapp.com/attachments/934798571688054914/1042091128838705272/Rectangle_7.png",
    fio: "Бакаев Анатолий Александрович",
    text: "Приветственное слово Директора Института кибербезопасности и цифровых технологий РТУ МИРЭА, доктор исторических наук, кандидат юридических наук, Заслуженный юрист России, Почётный работник высшего профессионального образования, Академик РАЕН, председателя Координационного совета ИКБ и Московского городского суда. ",
    programlistId: 1,
  });
  await ProgramListInfoModel.create({
    img: "https://cdn.discordapp.com/attachments/1047864383759458355/1047912597862764574/-1.png",
    fio: "Ивченко Максим Николаевич",
    text: "Приветственное слово заместителя председателя Московского городского суда",
    programlistId: 1,
  });
  console.log("kek");
};

const kek2 = async () => {
  let a = [
    {
      text: "Стратегическая сессия «Цифровые технологии и стандарты доказывания»",
    },
    {
      text: "Предметно-ориентированные информационные системы в правосудии: возможности, проблемы, перспективы»",
    },
    {
      text: "Свободное программное обеспечение и цифровая трансформация правосудия",
    },
    {
      text: "Панельная дискуссия «Анализ и мониторинг социальных сетей: криминологический аспект»",
    },
    {
      text: "Круглый стол «Парадигма цифровой трансформации гражданского судопроизводства»",
    },
    {
      text: "Цифровые и интеллектуальные методы принятия решений в судебной деятельности» с международным участием",
    },
    {
      text: "Феномен цифровизации экономической деятельности в правовых позициях судов",
    },
    {
      text: "Современные технологии мониторинга и анализа данных в цифровой криминалистике",
    },
    {
      text: "Мероприятие-сателлит – Презентация платформы Веримаг",
    },
    {
      text: "Цифровые технологии в судебной системе и защита данных в сфере судопроизводства",
    },
    {
      text: "Круглый стол «Облачные технологии и Центр обработки данных: перспективы использования в следственной и судебной деятельности»",
    },
    { text: "Заседание" },
    {
      text: "Панельная дискуссия «Судебное усмотрение в контексте цифровой трансформации права»",
    },
  ];
  a.map(async (a) => SectionButtonsModel.create(a));
};

const kek3 = async () => {
  let a = [
    [
      {
        title: "«Цифровые технологии и стандарты доказывания»",
        date: "12 ДЕКАБРЯ",
        time: "10.00 - 12.20",
        place: "Стромынка, 20, Малый зал Ученого совета",
        showArrow: true,
        opened: false,
        hQuesions: true,
        questions: [
          "Обсуждение экспертным сообществом векторных направлений исследования актуальной проблематики цифровой трансформации правосудия;",
          "Судебное нормотворчество ad hoc и contra legem vs искусственный интеллект; правовые позиции суда;",
          "Механизм формирования, проблемы прогнозируемого когнитивного влияния при использовании программ поддержки принятия решений;",
          "Этика искусственного интеллекта и  легитимизация предела допустимости его применения в правосудной деятельности;",
          "Лакуны доказательственного права и инструменты их восполнения;",
          "Доктрины доказательственного права;",
          "Имплементация в процесс и допустимость участия искусственного интеллекта;",
          "Расследование киберинцидентов;",
          "Проблемы квалификации, коллизионность в определении критерия допустимости доказательств.",
        ],
        hReports: false,
        reports: [],
      },
      {
        title: "Кофе-брейк",
        date: "",
        time: "11.00 - 11.20",
        place: "",
        showArrow: false,
        opened: false,
        hQuesions: false,
        questions: [],
        hReports: false,
        reports: [],
      },
      {
        title: "Обсуждение и подписание резолюции",
        date: "",
        time: "12.20 - 12.30",
        place: "",
        showArrow: false,
        opened: false,
        hQuesions: false,
        questions: [],
        hReports: false,
        reports: [],
      },
    ],
    [
      {
        title:
          "«Предметно-ориентированные информационные системы в правосудии: возможности, проблемы, перспективы» с международным участием",
        date: "12 ДЕКАБРЯ",
        time: "11.30 - 16.00",
        place: "Стромынка, 20, Малый зал Ученого совета",
        showArrow: true,
        opened: false,
        hQuesions: true,
        questions: [
          "Возможности применения существующих предметно-ориентированных информационных систем в судебной деятельности; перспективы автоматизации обеспечивающих процессов в судебной деятельности;",
          "Перспективы автоматизации обеспечивающих процессов в судебной деятельности;",
          "Проблемы анализа и структурирования данных о судебной деятельности при автоматизации;",
          "Разработка баз данных для автоматизации деятельности сотрудников организаций в сфере правосудия;",
          "Проблемы проектирования информационных систем поддержки судебной деятельности",
        ],
        hReports: false,
        reports: [],
      },
      {
        title: "Кофе - брейк",
        date: "",
        time: "13.00 - 13.30",
        place: "",
        showArrow: false,
        opened: false,
        hQuesions: true,
        questions: [],
        hReports: false,
        reports: [],
      },
    ],
    [
      {
        title:
          "«Свободное программное обеспечение и цифровая трансформация правосудия»",
        date: "12 ДЕКАБРЯ",
        time: "10.00 - 14.00",
        place: "Стромынка, 20, конференц-зал А-459",
        showArrow: true,
        opened: false,
        hQuesions: true,
        questions: [
          "Проблемы развития и внедрения свободного программного обеспечения в судебную и экспертную деятельность;",
          "Задачи подготовки ИТ-кадров при переходе на отечественное программное обеспечение;",
          "Оптимизация программного кода систем конечно-элементного анализа, обзор задач, потенциально возникающих при внедрении проекта «Электронное Водительское удостоверение»;",
          "Применение инфраструктуры FacePay для автоматической фиксации административных правонарушений на объектах транспорта;",
          "Система информационного ведения учета в архивах, непригодных для оцифровывания;",
          "Некоторые вопросы фиксации правонарушений по шумности автотранспорта и другие актуальные междисциплинарные аспекты оптимизации правоохранительной деятельности",
        ],
        hReports: false,
        reports: [],
      },
      {
        title: "Кофе - брейк",
        date: "",
        time: "12.00 - 13.20",
        place: "",
        showArrow: false,
        opened: false,
        hQuesions: true,
        questions: [],
        hReports: false,
        reports: [],
      },
    ],
    [
      {
        title:
          "«Анализ и мониторинг социальных сетей: криминологический аспект»",
        date: "12 ДЕКАБРЯ",
        time: "15.00 - 18.00",
        place: "Стромынка, 20, Зал Ученого совета",
        showArrow: true,
        opened: false,
        hQuesions: true,
        questions: [
          "Определение психотипа личности посредством анализа социальных сетей;",
          "Возможность использования результатов переписок как доказательственной базы;",
          "Вовлечение слабозащищенных категорий лиц в совершение противоправных действий;",
          "Необходимость создания системы регистрации в социальных сетях, доступной для проверки правоохранительными органами (аспекты коррупции, морали и защищенности от кражи данных сторонними лицами);",
          "Обсуждение создания новой превентивной ИС, предупреждающей совершения преступлений через социальные сети",
        ],
        hReports: false,
        reports: [],
      },
      {
        title: "Кофе - брейк",
        date: "",
        time: "16.20 - 16.40",
        place: "",
        showArrow: false,
        opened: false,
        hQuesions: true,
        questions: [],
        hReports: false,
        reports: [],
      },
    ],
    [
      {
        title:
          "«Парадигма цифровой трансформации гражданского судопроизводства»",
        date: "13 ДЕКАБРЯ",
        time: "10.00 - 12.20",
        place: "Стромынка, 20, Малый зал Ученого совета",
        showArrow: true,
        opened: false,
        hQuesions: true,
        questions: [
          "Обсуждение проблем судебной дискреции и обеспечения процессуальных прав в условиях цифровизации цивилистических процессов;",
          "Проблема соблюдения процессуального равенства;",
          "Коллизии понятийно-категориального аппарата;",
          "Критерий разграничения цифрового и электронного доказательства в гражданском процессе;",
          "Технологии Big Data и программы поддержки принятия решений – перспективы оптимизации гражданского судопроизводства;",
          "Проблемы правовой квалификации цифровых феноменов в цивилистическом процессе.",
        ],
        hReports: false,
        reports: [],
      },
      {
        title: "Кофе - брейк",
        date: "",
        time: "11.00 - 11.20",
        place: "",
        showArrow: false,
        opened: false,
        hQuesions: true,
        questions: [],
        hReports: false,
        reports: [],
      },
    ],
    [
      {
        title:
          "«Цифровые и интеллектуальные методы принятия решений в судебной деятельности» с международным участием»",
        date: "13 ДЕКАБРЯ",
        time: "12.20 - 14.20",
        place: "Стромынка, 20, Малый зал Ученого совета",
        showArrow: true,
        opened: false,
        hQuesions: true,
        questions: [
          "К дискуссии предлагаются вопросы применения интеллектуальных технологий в судебной деятельности, автоматизации обработки и анализа информации в рамках существующих процессуальных норм. Докладчиками будут рассмотрены направления совершенствования системы правосудия России, формы организации судебной деятельности в условиях технологической модернизации, а также современные подходы к совершенствованию точности и быстродействия поддержки принятия решений с использованием современных технологий сбора, хранения, обработки данных на базе интеллектуальных алгоритмов.",
        ],
        hReports: false,
        reports: [],
      },
      {
        title: "Кофе - брейк",
        date: "",
        time: "13.00 - 13.20",
        place: "",
        showArrow: false,
        opened: false,
        hQuesions: true,
        questions: [],
        hReports: false,
        reports: [],
      },
    ],
    [
      {
        title:
          "«Феномен цифровизации экономической деятельности в правовых позициях судов»",
        date: "13 ДЕКАБРЯ",
        time: "14.20 - 16.20",
        place: "Стромынка, 20, Малый зал Ученого совета",
        showArrow: true,
        opened: false,
        hQuesions: true,
        questions: [
          "Нормотворчество ad hoc: Передача финансовому управляющему доступа к криптокошельку; ",
          "Судебная интерпретация правовой природы криптовалюты; ",
          "Проблемы квалификации правовой природы и формы контракта, заключенного через блокчейн-платформу; ",
          "Цифровое администрирование договоров; ",
          "Методология судебных бухгалтерских экспертиз: цифровые инструменты и их допустимость;",
          "Экономическая и финансовая безопасность и Fintech: вектор судебной практики; ",
          "Краудфандинг, цифровое кредитование, цифровая идентификация и проблемы кибербезопасности",
        ],
        hReports: false,
        reports: [],
      },
      {
        title: "Кофе - брейк",
        date: "",
        time: "15.00 - 15.20",
        place: "",
        showArrow: false,
        opened: false,
        hQuesions: true,
        questions: [],
        hReports: false,
        reports: [],
      },
    ],
    [
      {
        title:
          "«Современные технологии мониторинга и анализа данных в цифровой криминалистике»",
        date: "14 ДЕКАБРЯ",
        time: "10.00 - 14.20",
        place: "Стромынка, 20, конференц-зал коворкинг зоны",
        showArrow: true,
        opened: false,
        hQuesions: true,
        questions: [
          "Методы идентификации личности в цифровой криминалистике; ",
          "Верификация рукописной подписи;  ",
          "Инструменты текстовой аналитики для мониторинга изменений параметров графов связей;  ",
          "Математические модели для прогнозирования динамики настроений пользователей интернет- ресурсов; ",
          "Методология судебных бухгалтерских экспертиз: цифровые инструменты и их допустимость;",
          "Расследование инцидентов ИБ в контексте инфраструктурного детсруктивизма; ",
          "Методы обнаружения компьютерных инцидентов на  объектах КИИ;",
          "Теоретико-игровая модель  информационно-аналитического мониторинга;",
          "Особенности функционирования отечественных систем мониторинга обнаружения вторжений; ",
          "Методика формирования списка критериев в системах обнаружения вторжений",
        ],
        hReports: false,
        reports: [],
      },
      {
        title: "Кофе - брейк",
        date: "",
        time: "11.20 - 11.40",
        place: "",
        showArrow: false,
        opened: false,
        hQuesions: true,
        questions: [],
        hReports: false,
        reports: [],
      },
    ],
    [],
    [
      {
        title:
          "«Цифровые технологии в судебной системе и защита данных в сфере судопроизводства»",
        date: "14 ДЕКАБРЯ",
        time: "12.00 - 14.20",
        place: "Проспект Вернадского, 78, корпус Е, конференц-зал Е-23",
        showArrow: false,
        opened: false,
        hQuesions: false,
        questions: [],
        hReports: false,
        reports: [],
      },
      {
        title: "Кофе - брейк",
        date: "",
        time: "13.00 - 13.20",
        place: "",
        showArrow: false,
        opened: false,
        hQuesions: true,
        questions: [],
        hReports: false,
        reports: [],
      },
    ],
    [
      {
        title:
          "«Облачные технологии и Центр обработки данных: перспективы использования в следственной и судебной деятельности»",
        date: "14 ДЕКАБРЯ",
        time: "15.00 - 17.20",
        place: "Стромынка, 20, Малый зал Ученого совета",
        showArrow: true,
        opened: false,
        hQuesions: true,
        questions: [
          "Облачные сервисы (public cloud services) ― это программы и платформы, «живущие» и функционирующие на серверах облачных провайдеров. Основная особенность облачных приложений заключается в следующем: создавая аккаунт пользователь сможет получать доступ к собственной информации с любого гаджета в любой точке мира. Необходимым и достаточным условием является создание логина и пароля. Использовать облачные службы не только удобно, но и безопасно. Даже если с телефоном или компьютером что-то случится, Ваши данные не исчезнут. ",
          "В ходе работы круглого стола планируется рассмотреть необходимость и возможность применения облачных технологий и создания центров обработки данных для аккумулирования и быстрого доступа к базам результатов баллистических и судебно-медицинских экспертиз.",
        ],
        hReports: false,
        reports: [],
      },
      {
        title: "Кофе - брейк",
        date: "",
        time: "16.20 - 16.40",
        place: "",
        showArrow: false,
        opened: false,
        hQuesions: true,
        questions: [],
        hReports: false,
        reports: [],
      },
    ],

    [
      {
        title:
          "«Заседание Студенческого научного общества Института кибербезопасности и цифровых технологий РТУ МИРЭА, презентация результатов НИР учебно-научного центра «Этика искусственного интеллекта в судебной деятельности»",
        date: "15 ДЕКАБРЯ",
        time: "14.20 - 15.40",
        place:
          "Стромынка, 20, Учебно-научный центр «Этика искусственного интеллекта в судебной деятельности»",
        showArrow: false,
        opened: false,
        hQuesions: false,
        questions: [],
        hReports: false,
        reports: [],
      },
    ],
    [
      {
        title: "«Судебное усмотрение в контексте цифровой трансформации права»",
        date: "16 ДЕКАБРЯ",
        time: "14.00 - 17.00",
        place: "Стромынка, 20, Зал Ученого совета",
        showArrow: true,
        opened: false,
        hQuesions: true,
        questions: [
          "Искусственный интеллект в правосудии;",
          "Машиночитаемое право: проблемы семантики;",
          "Судебная дискреция и искусственный интеллект;",
          "Судебная практика как матрица права vs искусственный интеллект как система оптимизации правосудия;",
          "Этические нормы и искусственный интеллект; этика искусственного интеллекта",
        ],
        hReports: false,
        reports: [],
      },
      {
        title: "Кофе - брейк",
        date: "",
        time: "15.20 - 15.40",
        place: "",
        showArrow: false,
        opened: false,
        hQuesions: true,
        questions: [],
        hReports: false,
        reports: [],
      },
    ],
  ];
  a.map((b, i) => {
    let sectionbuttonId = i + 1
    b.map(c => {
      // console.log({...c, sectionbuttonId});
      SectionListModel.create({...c, sectionbuttonId})
    })
  });
};
