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
      //НЕ ВКЛЮЧАЙ БЛЯТЬ ФОРС ТРУ, ИНАЧЕ ТЕБЕ ПИЗДА!!!!!!
      //ЕСЛИ ВКЛЮЧИТЬ ВСЯ БД УЛЕТИТ В ТАРТАРАРЫ, ОНО ТЕБЕ НАДО?
      await dataBase.sync({alter: true});
      // await kek();
      // await kek2();
      // await kek3();
      // await kek4();
      // await kek5()
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
};

const kek2 = async () => {
  let a = [
    {
      id: 1,
      text: "Стратегическая сессия «Цифровые технологии и стандарты доказывания»",
    },
    {
      id: 2,
      text: "Предметно-ориентированные информационные системы в правосудии: возможности, проблемы, перспективы»",
    },
    {
      id: 3,
      text: "Свободное программное обеспечение и цифровая трансформация правосудия",
    },
    {
      id: 4,
      text: "Панельная дискуссия «Анализ и мониторинг социальных сетей: криминологический аспект»",
    },
    {
      id: 5,
      text: "Круглый стол «Парадигма цифровой трансформации гражданского судопроизводства»",
    },
    {
      id: 6,
      text: "Цифровые и интеллектуальные методы принятия решений в судебной деятельности» с международным участием",
    },
    {
      id: 7,
      text: "Феномен цифровизации экономической деятельности в правовых позициях судов",
    },
    {
      id: 8,
      text: "Современные технологии мониторинга и анализа данных в цифровой криминалистике",
    },
    { id: 9, text: "Мероприятие-сателлит – Презентация платформы Веримаг" },
    {
      id: 10,
      text: "Цифровые технологии в судебной системе и защита данных в сфере судопроизводства",
    },
    {
      id: 11,
      text: "Круглый стол «Облачные технологии и Центр обработки данных: перспективы использования в следственной и судебной деятельности»",
    },
    { id: 12, text: "Заседание СНО ИКБ РТУ-МИРЭА" },
    {
      id: 13,
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
        showArrow: false,
        opened: false,
        hQuesions: false,
        isSection: true,
        canRegister: false,
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
        sectionbuttonId: 1,
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
        sectionbuttonId: 1,
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
        sectionbuttonId: 1,
      },
    ],
    //
    [
      {
        title:
          "«Предметно-ориентированные информационные системы в правосудии: возможности, проблемы, перспективы» с международным участием",
        date: "12 ДЕКАБРЯ",
        time: "11.30 - 16.00",
        place: "Стромынка, 20, Малый зал Ученого совета",
        showArrow: false,
        opened: false,
        hQuesions: false,
        isSection: true,
        canRegister: true,
        questions: [
          "Возможности применения существующих предметно-ориентированных информационных систем в судебной деятельности; перспективы автоматизации обеспечивающих процессов в судебной деятельности;",
          "Перспективы автоматизации обеспечивающих процессов в судебной деятельности;",
          "Проблемы анализа и структурирования данных о судебной деятельности при автоматизации;",
          "Разработка баз данных для автоматизации деятельности сотрудников организаций в сфере правосудия;",
          "Проблемы проектирования информационных систем поддержки судебной деятельности",
        ],
        hReports: false,
        sectionbuttonId: 2,
      },
      {
        title: "Кофе - брейк",
        date: "",
        time: "13.00 - 13.30",
        place: "",
        showArrow: false,
        opened: false,
        hQuesions: false,
        questions: [],
        hReports: false,
        sectionbuttonId: 2,
      },
    ],
    [
      {
        title:
          "«Свободное программное обеспечение и цифровая трансформация правосудия»",
        date: "12 ДЕКАБРЯ",
        time: "10.00 - 14.00",
        place: "Стромынка, 20, конференц-зал А-459",
        showArrow: false,
        opened: false,
        hQuesions: false,
        questions: [
          "Проблемы развития и внедрения свободного программного обеспечения в судебную и экспертную деятельность;",
          "Задачи подготовки ИТ-кадров при переходе на отечественное программное обеспечение;",
          "Оптимизация программного кода систем конечно-элементного анализа, обзор задач, потенциально возникающих при внедрении проекта «Электронное Водительское удостоверение»;",
          "Применение инфраструктуры FacePay для автоматической фиксации административных правонарушений на объектах транспорта;",
          "Система информационного ведения учета в архивах, непригодных для оцифровывания;",
          "Некоторые вопросы фиксации правонарушений по шумности автотранспорта и другие актуальные междисциплинарные аспекты оптимизации правоохранительной деятельности",
        ],
        hReports: false,
        sectionbuttonId: 3,
        canRegister: false,
      },
      {
        title: "Кофе - брейк",
        date: "",
        time: "12.00 - 13.20",
        place: "",
        showArrow: false,
        opened: false,
        hQuesions: false,
        questions: [],
        hReports: false,
        sectionbuttonId: 3,
      },
    ],
    [
      {
        title:
          "«Анализ и мониторинг социальных сетей: криминологический аспект»",
        date: "12 ДЕКАБРЯ",
        time: "15.00 - 18.00",
        place: "Стромынка, 20, Зал Ученого совета",
        showArrow: false,
        opened: false,
        hQuesions: false,
        isSection: true,
        canRegister: true,
        questions: [
          "Определение психотипа личности посредством анализа социальных сетей;",
          "Возможность использования результатов переписок как доказательственной базы;",
          "Вовлечение слабозащищенных категорий лиц в совершение противоправных действий;",
          "Необходимость создания системы регистрации в социальных сетях, доступной для проверки правоохранительными органами (аспекты коррупции, морали и защищенности от кражи данных сторонними лицами);",
          "Обсуждение создания новой превентивной ИС, предупреждающей совершения преступлений через социальные сети",
        ],
        hReports: false,
        sectionbuttonId: 4,
      },
      {
        title: "Кофе - брейк",
        date: "",
        time: "16.20 - 16.40",
        place: "",
        showArrow: false,
        opened: false,
        hQuesions: false,
        questions: [],
        hReports: false,
        sectionbuttonId: 4,
      },
    ],
    [
      {
        title:
          "«Парадигма цифровой трансформации гражданского судопроизводства»",
        date: "13 ДЕКАБРЯ",
        time: "10.00 - 12.20",
        place: "Стромынка, 20, Малый зал Ученого совета",
        showArrow: false,
        opened: false,
        hQuesions: false,
        questions: [
          "Обсуждение проблем судебной дискреции и обеспечения процессуальных прав в условиях цифровизации цивилистических процессов;",
          "Проблема соблюдения процессуального равенства;",
          "Коллизии понятийно-категориального аппарата;",
          "Критерий разграничения цифрового и электронного доказательства в гражданском процессе;",
          "Технологии Big Data и программы поддержки принятия решений – перспективы оптимизации гражданского судопроизводства;",
          "Проблемы правовой квалификации цифровых феноменов в цивилистическом процессе.",
        ],
        hReports: false,
        sectionbuttonId: 5,
        canRegister: false,
      },
      {
        title: "Кофе - брейк",
        date: "",
        time: "11.00 - 11.20",
        place: "",
        showArrow: false,
        opened: false,
        hQuesions: false,
        questions: [],
        hReports: false,
        sectionbuttonId: 5,
      },
    ],
    [
      {
        title:
          "«Цифровые и интеллектуальные методы принятия решений в судебной деятельности» с международным участием»",
        date: "13 ДЕКАБРЯ",
        time: "12.20 - 14.20",
        place: "Стромынка, 20, Малый зал Ученого совета",
        showArrow: false,
        opened: false,
        hQuesions: false,
        isSection: true,
        canRegister: true,
        questions: [
          "К дискуссии предлагаются вопросы применения интеллектуальных технологий в судебной деятельности, автоматизации обработки и анализа информации в рамках существующих процессуальных норм. Докладчиками будут рассмотрены направления совершенствования системы правосудия России, формы организации судебной деятельности в условиях технологической модернизации, а также современные подходы к совершенствованию точности и быстродействия поддержки принятия решений с использованием современных технологий сбора, хранения, обработки данных на базе интеллектуальных алгоритмов.",
        ],
        hReports: false,
        sectionbuttonId: 6,
      },
      {
        title: "Кофе - брейк",
        date: "",
        time: "13.00 - 13.20",
        place: "",
        showArrow: false,
        opened: false,
        hQuesions: false,
        questions: [],
        hReports: false,
        sectionbuttonId: 6,
      },
    ],
    [
      {
        title:
          "«Феномен цифровизации экономической деятельности в правовых позициях судов»",
        date: "13 ДЕКАБРЯ",
        time: "14.20 - 16.20",
        place: "Стромынка, 20, Малый зал Ученого совета",
        showArrow: false,
        opened: false,
        hQuesions: false,
        isSection: true,
        canRegister: true,
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
        sectionbuttonId: 7,
      },
      {
        title: "Кофе - брейк",
        date: "",
        time: "15.00 - 15.20",
        place: "",
        showArrow: false,
        opened: false,
        hQuesions: false,
        questions: [],
        hReports: false,
        sectionbuttonId: 7,
      },
    ],
    [
      {
        title:
          "«Современные технологии мониторинга и анализа данных в цифровой криминалистике»",
        date: "14 ДЕКАБРЯ",
        time: "10.00 - 14.20",
        place: "Стромынка, 20, конференц-зал коворкинг зоны",
        showArrow: false,
        opened: false,
        hQuesions: false,
        isSection: true,
        canRegister: true,
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
        sectionbuttonId: 8,
      },
      {
        title: "Кофе - брейк",
        date: "",
        time: "11.20 - 11.40",
        place: "",
        showArrow: false,
        opened: false,
        hQuesions: false,
        questions: [],
        hReports: false,
        sectionbuttonId: 8,
      },
      {
        title: "Мероприятие-сателлит – Презентация платформы Веримаг",
        showArrow: false,
        opened: false,
        hQuesions: false,
        hReports: false,
        isSection: false,
        canRegister: false,
        sectionbuttonId: 8,
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
        sectionbuttonId: 10,
        canRegister: false,
      },
      {
        title: "Кофе - брейк",
        date: "",
        time: "13.00 - 13.20",
        place: "",
        showArrow: false,
        opened: false,
        hQuesions: false,
        questions: [],
        hReports: false,
        sectionbuttonId: 10,
      },
    ],
    [
      {
        title:
          "«Облачные технологии и Центр обработки данных: перспективы использования в следственной и судебной деятельности»",
        date: "14 ДЕКАБРЯ",
        time: "15.00 - 17.20",
        place: "Стромынка, 20, Малый зал Ученого совета",
        showArrow: false,
        opened: false,
        hQuesions: false,
        isSection: true,
        canRegister: true,
        questions: [
          "Облачные сервисы (public cloud services) ― это программы и платформы, «живущие» и функционирующие на серверах облачных провайдеров. Основная особенность облачных приложений заключается в следующем: создавая аккаунт пользователь сможет получать доступ к собственной информации с любого гаджета в любой точке мира. Необходимым и достаточным условием является создание логина и пароля. Использовать облачные службы не только удобно, но и безопасно. Даже если с телефоном или компьютером что-то случится, Ваши данные не исчезнут. ",
          "В ходе работы круглого стола планируется рассмотреть необходимость и возможность применения облачных технологий и создания центров обработки данных для аккумулирования и быстрого доступа к базам результатов баллистических и судебно-медицинских экспертиз.",
        ],
        hReports: false,
        sectionbuttonId: 11,
      },
      {
        title: "Кофе - брейк",
        date: "",
        time: "16.20 - 16.40",
        place: "",
        showArrow: false,
        opened: false,
        hQuesions: false,
        questions: [],
        hReports: false,
        sectionbuttonId: 11,
      },
    ],

    [
      {
        title:
          "«Заседание СНО ИКБ РТУ-МИРЭА, презентация результатов НИР учебно-научного центра «Этика ИИ в судебной деятельности»",
        date: "15 ДЕКАБРЯ",
        time: "14.20 - 15.40",
        place:
          "Стромынка, 20, Учебно-научный центр «Этика искусственного интеллекта в судебной деятельности»",
        showArrow: false,
        opened: false,
        hQuesions: false,
        questions: [],
        hReports: false,
        sectionbuttonId: 12,
        isSection: true,
        canRegister: true,
      },
    ],
    [
      {
        title: "«Судебное усмотрение в контексте цифровой трансформации права»",
        date: "16 ДЕКАБРЯ",
        time: "14.00 - 17.00",
        place: "Стромынка, 20, Зал Ученого совета",
        showArrow: false,
        opened: false,
        hQuesions: false,
        isSection: true,
        canRegister: true,
        questions: [
          "Искусственный интеллект в правосудии;",
          "Машиночитаемое право: проблемы семантики;",
          "Судебная дискреция и искусственный интеллект;",
          "Судебная практика как матрица права vs искусственный интеллект как система оптимизации правосудия;",
          "Этические нормы и искусственный интеллект; этика искусственного интеллекта",
        ],
        hReports: false,
        sectionbuttonId: 13,
      },
      {
        title: "Кофе - брейк",
        date: "",
        time: "15.20 - 15.40",
        place: "",
        showArrow: false,
        opened: false,
        hQuesions: false,
        questions: [],
        hReports: false,
        sectionbuttonId: 13,
      },
    ],
  ];
  let state = 0;
  a.map(async (b, i) => {
    let sectionbuttonId = i + 1;
    b.map((c, i) => {
      state++;
      setTimeout(async () => {
        await SectionListModel.create(c);
      }, 1000);
    });
  });
};

const kek4 = async () => {
  const a = [
    {
      id: 0,
      img: "https://api.virusbeats.ru/img/speakers/(14).png",
      alt: "speaker",
      firstName: "Бакаев",
      middleName: "Анатолий",
      lastName: "Александрович",
      acDegree: "Доктор исторических наук,  кандидат юридических наук",
      acTitle: "ПРОФЕССОР",
      honorTitle:
        "Заслуженный юрист Российской Федерации, Почётный работник высшего профессионального образования",
      position:
        "Директор Института кибербезопасности и цифровых технологий, заведующий кафедрой «Правовое обеспечение национальной безопасности»",
      description:
        "Академик РАЕН, Председатель Координационного совета Института кибербезорасности и цифровых технологий и Московского городского суда",
    },
    {
      id: 1,
      img: "https://api.virusbeats.ru/img/speakers/(8).png",
      alt: "speaker",
      firstName: "Сибирская",
      middleName: "Елена",
      lastName: "Викторовна",
      acDegree: "Доктор экономических наук",
      acTitle: "Профессор",
      honorTitle: "",
      position: "",
      description: "",
    },
    {
      id: 2,
      img: "https://api.virusbeats.ru/img/speakers/(10).png",
      alt: "speaker",
      firstName: "Никульчев",
      middleName: "Евгений",
      lastName: "Витальевич",
      acDegree: "Доктор технических наук,  кандидат юридических наук",
      acTitle: "ПРОФЕССОР",
      honorTitle:
        "Заслуженный юрист Российской Федерации, Почётный работник высшего профессионального образования",
      position:
        "Проректор по научной работе НОУ ВПО Московский технологический институт «ВТУ»",
      description: "Обладатель почётного учёного звания «Профессор РАО»",
    },
    {
      id: 3,
      img: "https://api.virusbeats.ru/img/speakers/(3).png",
      alt: "speaker",
      firstName: "Козачок ",
      middleName: "Александр",
      lastName: "Васильевич",
      acDegree: "Доктор технических наук",
      acTitle: "",
      honorTitle: "",
      position:
        "Сотрудник Академии Федеральной службы безопасности Российской Федерации»",
      description: "",
    },
    {
      id: 4,
      img: "https://api.virusbeats.ru/img/speakers/(2).png",
      alt: "speaker",
      firstName: "Иванова",
      middleName: "Ирина",
      lastName: "Алексеевна",
      acDegree: "Кандидат технических наук",
      acTitle: "Доцент",
      honorTitle: "",
      position:
        "заведующий кафедрой «Цифровые технологии обработки данных» Института кибербезорасности и цифровых технологий",
      description:
        "Специалист в области анализа данных,эксперт в области анализа данных и искусственного интеллекта,эксперт проекта «Инженеры будущего»,эксперт платформы Национальная техническая инициатива",
    },
    {
      id: 5,
      img: "https://api.virusbeats.ru/img/speakers/(11).png",
      alt: "speaker",
      firstName: "Плешаков",
      middleName: "Владимир",
      lastName: "Андреевич",
      acDegree: "Кандидат педагогических наук",
      acTitle: "Доцент",
      honorTitle:
        "Заслуженный юрист Российской Федерации, Почётный работник высшего профессионального образования",
      position:
        "Доцент кафедры социальной педагогики и психологии факультета педагогики и психологии ФГБОУ ВПО «Московский педагогический государственный университет»",
      description:
        "Ученый секретарь диссертационного совета при МПГУ, соучредитель, научный консультант и тренер компании «Искусство тренинга», лауреат именной стипендии Правительства РФ (2000), Президента РФ (2001) за научные успехи, победитель конкурса на право получения грантов Президента РФ (2010)",
    },
    {
      id: 6,
      img: "https://api.virusbeats.ru/img/speakers/(12).png",
      alt: "speaker",
      firstName: "Халабия",
      middleName: "Рустам",
      lastName: "Фарук",
      acDegree: "Кандидат технических наук",
      acTitle: "Доцент",
      honorTitle:
        "Заслуженный юрист Российской Федерации, Почётный работник высшего профессионального образования",
      position: `Доцент - Кафедра КБ-5 «Аппаратного, программного и математического обеспечения вычислительных систем »`,
      description: "",
    },
    {
      id: 7,
      img: "https://api.virusbeats.ru/img/speakers/(5).png",
      alt: "speaker",
      firstName: "Кулагин",
      middleName: "Владимир",
      lastName: "Петрович",
      acDegree: "доктор технических наук,  кандидат юридических наук",
      acTitle: "",
      honorTitle: "",
      position:
        "Заведующий кафедрой «Аппаратного, программного и математического обеспечения вычислительных систем, Институт информационных технологий»",
      description:
        "Премия Президента Российской Федерации в области образования за 2002 год за инновационную работу для учебных заведений высшего профессионального образования и органов управления образованием субъектов Российской Федерации «Разработка и внедрение информационно-образовательного комплекса по геоинформатике и геоинформационным технологиям» (2002 год)",
    },
    {
      id: 8,
      img: "https://api.virusbeats.ru/img/speakers/(13).png",
      alt: "speaker",
      firstName: "Богатырев",
      middleName: "Сергей",
      lastName: "Индрисович",
      acDegree: "Кандидат экономических наук",
      acTitle: "Доцент",
      honorTitle:
        "Почетный сотрудник органов налоговой полиции,  почетный сотрудник органов наркоконтроля",
      position:
        "Заведующий кафедрой «экономической экспертизы и финансового мониторинга» (кафедра ЭЭиФМ) Института кибербезопасности и цифровых технологий",
      description: "Генерал-майор полиции",
    },
    {
      id: 9,
      img: "https://api.virusbeats.ru/img/speakers/(4).png",
      alt: "speaker",
      firstName: "Сальников ",
      middleName: "Константин ",
      lastName: "Евгеньевич",
      acDegree: "",
      acTitle: "Доцент",
      honorTitle: "",
      position:
        "Директор АНО Центр судебных исследований «Экспертология», доцент кафедры «экономической экспертизы и финансового мониторинга» (кафедра ЭЭиФМ) Института кибербезорасности и цифровых технологий",
      description:
        "Имеет медали «За безупречную службу» III степени, благодарность Председателя СК России А.И. Бастрыкина от 09.11.2015 ",
    },
    {
      id: 10,
      img: "https://api.virusbeats.ru/img/speakers/(7).png",
      alt: "speaker",
      firstName: "Смирнов ",
      middleName: "Алексей ",
      lastName: "Владимирович",
      acDegree: "",
      acTitle: "",
      honorTitle: "",
      position: "Генеральный директор «Базальт СПО»",
      description: "Член правления «Руссофт»",
    },
    {
      id: 11,
      img: "https://api.virusbeats.ru/img/speakers/(6).png",
      alt: "speaker",
      firstName: "Тымбай",
      middleName: "Сергей",
      lastName: "Алексеевич",
      acDegree: "",
      acTitle: "",
      honorTitle: "",
      position:
        "Директор по обеспечению цифровой трансформации, Заместитель старшего директора по цифровой трансформации НИУ ВШЭ",
      description: "",
    },
    {
      id: 12,
      img: "https://api.virusbeats.ru/img/speakers/(9).png",
      alt: "speaker",
      firstName: "Степанова",
      middleName: "И",
      lastName: "В",
      acDegree: "",
      acTitle: "",
      honorTitle: "",
      position: "",
      description: "",
    },
    {
      id: 13,
      img: "https://api.virusbeats.ru/img/speakers/(1).png",
      alt: "speaker",
      firstName: "Кашицин",
      middleName: "Владимир",
      lastName: "Петрович",
      acDegree: "кандидат педагогических наук",
      acTitle: "",
      honorTitle: "",
      position:
        "Советник Генерального директора, Департамент цифровизации образования, АО «Рт Лабс»",
      description: "",
    },
  ];
  a.map(async (a) => {
    await speakersModel.create(a);
  });
};

const kek5 = async () => {
  await ReportsModel.create({
    fullName: "ROFLER KEKER KEK",
    email: "",
    activityType: "",
    studyPlaceAndSpecialy: "",
    workPlaceAndPosition: "KEKEKE",
    acDegree: "ROFL",
    topic: "ROFL",
    comand: [
      { fullName: "ROFLER ROFLANDER ROFL", description: "PIZDES TYT PRIKOL" },
      { fullName: "ROFLER ROFLANDER ROFL", description: "PIZDES TYT PRIKOL" },
      { fullName: "ROFLER ROFLANDER ROFL", description: "PIZDES TYT PRIKOL" },
      { fullName: "ROFLER ROFLANDER ROFL", description: "PIZDES TYT PRIKOL" },
    ],
    section: "",
    fullNameSupervisor: "",
    rankSupervisor: "",
    positionSupervisor: "",
    formOfParticipation: "",
  });
};
