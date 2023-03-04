import GameClass from "./gameClass";
import categoriesGames from "./categoriesGames.js";

// import faq from '../faq/questionsGames';
import recommendationsData from "./gulagUSSR/recommendations";

let game = new GameClass();
// game.faq = faq.a;
game.promo = {
  name: "💀 Gulag: 1928-1953",
  shortName: "💀 Gulag",
  banner:
    "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/banners/gulag_banner.png",
  landingBanner:
    "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/bg/gulag_bg.png",
  logo: "img/games/logos/gulagUSSR_logo.png",
  promo:
    "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/landingPromo/gulag.png",
  status: 1, // 0 - alfa, 1 - beta, 2 - good,
  shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  brandColor: "#E40F2A",
  id: "gulag-ussr",
  serial: "4",
  price: "",
  categories: [
    categoriesGames[1],
    categoriesGames[2],
    categoriesGames[5],
    categoriesGames[6],
  ],
};
game.moreInfo = {
  players: "2-8",
  age: "16+",
  time: "120-180",
  LOR: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  ],
  lorImg:
    "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/banners/gulag_banner.png",
  goal: "",
  educationMoments: ["", ""],
  description: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  ],
  targetAudience: "",
  photos: ["", "", ""],
};
game.roles = {
  description: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  ],
  banner:
    "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/gulag/banners/persons_banner.png",
  characters: [
    {
      name: "Lydia Korneyevna Chukovskaya",
      bgColor: "#E40F2A",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/gulag/persons/chukovskaya_person.png",
    },
    {
      name: "Yury Osipovich Dombrovsky",
      bgColor: "#E40F2A",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/gulag/persons/dombrovsky_person.png",
    },
    {
      name: "Nikolay Stepanovich Gumilyov",
      bgColor: "#E40F2A",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/gulag/persons/gumilyov_person.png",
    },
    {
      name: "Daniil Ivanovich Kharms",
      bgColor: "#E40F2A",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/gulag/persons/kharms_person.png",
    },
    {
      name: "Boris Petrovich Kornilov",
      bgColor: "#E40F2A",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/gulag/persons/kornilov_person.png",
    },
    {
      name: "Osip Emilyevich Mandelstam",
      bgColor: "#E40F2A",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/gulag/persons/mandelstam_person.png",
    },
    {
      name: "Boris Andreyevich Pilnyak",
      bgColor: "#E40F2A",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/gulag/persons/pilnyak_person.png",
    },
    {
      name: "Yaroslav Vasilevich Smelyakov",
      bgColor: "#E40F2A",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/gulag/persons/smelyakov_person.png",
    },
    {
      name: "Aleksandr Isayevich Solzhenitsyn",
      bgColor: "#E40F2A",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/gulag/persons/solzhenitsyn_person.png",
    },
    {
      name: "Varlam Tikhonovich Shalamov",
      bgColor: "#E40F2A",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/gulag/persons/varlamov_person.png",
    },
    {
      name: "Nikolay Alekseyevich Zabolotsky",
      bgColor: "#E40F2A",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/gulag/persons/zabolotsky_person.png",
    },
    {
      name: "",
      bgColor: "#E40F2A",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "",
    },
    {
      name: "",
      bgColor: "#E40F2A",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "",
    },
    {
      name: "",
      bgColor: "#E40F2A",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "",
    },
    {
      name: "",
      bgColor: "#E40F2A",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "",
    },
  ],
};
game.croundfanding = {
  links: {
    allegro: "https://allegro.pl/",
    patronitePl: "https://patronite.pl/",
    auction: "gulagUSSR",
  },
  goal: "",
};
game.recommendations = recommendationsData;
// game.workshopsHistory = workshopsList.a;

export default game;
