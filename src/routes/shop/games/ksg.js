import GameClass from "./gameClass";
import categoriesGames from "./categoriesGames.js";

// import faq from '../faq/questionsGames';
import recommendationsData from "./ksg/recommendations";

let game = new GameClass();
// game.faq = faq.a;
game.promo = {
  name: "12.262",
  shortName: "12.262",
  banner: "img/games/banners/ksg_banner.png",
  landingBanner:
    "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/bg/ksg_bg.png",
  logo: "img/games/logos/ksg_logo.png",
  promo:
    "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/landingPromo/ksg.png",
  status: 1, // 0 - alfa, 1 - beta, 2 - good,
  shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  brandColor: "#97501E",
  id: "ksg",
  serial: "6",
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
    "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/banners/lgbt_banner.png",
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
    "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/ksg/banners/persons_banner.png",
  characters: [
    {
      name: "Thunderbird",
      bgColor: "#809b29",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/ksg/persons/thunderbird_person.png",
    },
    {
      name: "Vagosh",
      bgColor: "#70794f",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/ksg/persons/vagosh_person.png",
    },
    {
      name: "Satan",
      bgColor: "#e30613",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/ksg/persons/satan_person.png",
    },
    {
      name: "Yoki",
      bgColor: "#b33209",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/ksg/persons/yoki_person.png",
    },
    {
      name: "Tedy",
      bgColor: "#f7b6a4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/ksg/persons/tedy_person.png",
    },
    {
      name: "Prospector",
      bgColor: "#fed89c",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/ksg/persons/prospector_person.png",
    },
    {
      name: "Geotecton",
      bgColor: "#b9cf31",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/ksg/persons/geotecton_person.png",
    },
    {
      name: "Geognosia",
      bgColor: "#fcbe00",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/ksg/persons/geognosia_person.png",
    },
    {
      name: "Earthlinger",
      bgColor: "#37464f",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/ksg/persons/earthlinger_person.png",
    },
    {
      name: "Chappie",
      bgColor: "#97501e",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/ksg/persons/chappie_person.png",
    },
    {
      name: "Xeno",
      bgColor: "#000000",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/ksg/persons/xeno_person.png",
    },
    {
      name: "Polygenro",
      bgColor: "#000000",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/ksg/persons/polygenro_person.png",
    },
    {
      name: "Khaetano",
      bgColor: "#000000",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/ksg/persons/khaetano_person.png",
    },
    {
      name: "Isfeno",
      bgColor: "#000000",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/ksg/persons/isfeno_person.png",
    },
    {
      name: "Kato",
      bgColor: "#000000",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/ksg/persons/kato_person.png",
    },

    {
      name: "Fevagno",
      bgColor: "#e6007e",
      bgColor: "#000000",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/ksg/persons/fevagno_person.png",
    },
  ],
};
game.croundfanding = {
  links: {
    allegro: "https://allegro.pl/",
    patronitePl: "https://patronite.pl/",
    auction: "ksg",
  },
  goal: "",
};
game.recommendations = recommendationsData;
// game.workshopsHistory = workshopsList.a;

export default game;
