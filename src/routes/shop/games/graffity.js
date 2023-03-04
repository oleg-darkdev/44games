import GameClass from "./gameClass";
import categoriesGames from "./categoriesGames.js";

// import faq from '../faq/questionsGames';
import recommendationsData from "./graffity/recommendations";

let game = new GameClass();
// game.faq = faq.a;
game.promo = {
  name: "🖍 Graffity",
  shortName: "🖍 Graffity",
  banner:
    "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/banners/graffity_banner.png",
  landingBanner:
    "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/bg/graffity_bg.png",
  logo: "img/games/logos/graffity_logo.png",
  promo:
    "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/landingPromo/graffity.png",
  status: 1, // 0 - alfa, 1 - beta, 2 - good,
  shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  brandColor: "#FEEB1A",
  id: "graffity",
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
    "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/banners/graffity_banner.png",

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
    "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/graffity/banners/persons_banner.png",
  characters: [
    {
      name: "CHAAAART",
      bgColor: "#32331E",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/graffity/persons/CHAAAART_person.png",
    },
    {
      name: "BANDIT",
      bgColor: "#A12835",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/graffity/persons/BANDIT_person.png",
    },
    {
      name: "MILLA",
      bgColor: "#F49523",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/graffity/persons/MILLA_person.png",
    },
    {
      name: "T1T!N",
      bgColor: "#00A79D",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/graffity/persons/t1t1n_person.png",
    },
    {
      name: "OMI",
      bgColor: "#97C21E",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/graffity/persons/OMI_person.png",
    },
    {
      name: "FOREST",
      bgColor: "#397E32",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/graffity/persons/FOREST_person.png",
    },

    {
      name: "TAGERAN",
      bgColor: "#2C5F90",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/graffity/persons/TAGERAN_person.png",
    },
    {
      name: "PTSR",
      bgColor: "#03221C",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/graffity/persons/PTSR_person.png",
    },
    {
      name: "9LVL",
      bgColor: "#F49523",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/graffity/persons/9LVL_person.png",
    },
    {
      name: "BOMB4",
      bgColor: "#414142",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/graffity/persons/BOMB4_person.png",
    },

    {
      name: "ARA",
      bgColor: "#4A2775",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/graffity/persons/ara_person.png",
    },

    {
      name: "UMACHINE",
      bgColor: "#571110",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/graffity/persons/UMACHINE_person.png",
    },
    {
      name: "115",
      bgColor: "#C3185B",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/graffity/persons/115_band_1.png",
    },
    {
      name: "115",
      bgColor: "#C3185B",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/graffity/persons/115_band_2.png",
    },
    {
      name: "9rabble",
      bgColor: "#C2B59C",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/graffity/persons/9rabble_band_1.png",
    },
    {
      name: "9rabble",
      bgColor: "#C2B59C",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/graffity/persons/9rabble_band_2.png",
    },
    {
      name: "BDB",
      bgColor: "#455A64",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/graffity/persons/bdb_band_1.png",
    },
    {
      name: "BDB",
      bgColor: "#455A64",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/graffity/persons/bdb_band_2.png",
    },
    {
      name: "cbs tv",
      bgColor: "#72160E",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/graffity/persons/cbstv_band_2.png",
    },
    {
      name: "cbs tv",
      bgColor: "#72160E",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/graffity/persons/cbstv_band_1.png",
    },
    {
      name: "DMOB",
      bgColor: "#AED081",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/graffity/persons/dmob_band_1.png",
    },
    {
      name: "DMOB",
      bgColor: "#AED081",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/graffity/persons/dmob_band_2.png",
    },
    {
      name: "GENERALS",
      bgColor: "#FEF077",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/graffity/persons/generals_band_1.png",
    },
    {
      name: "GENERALS",
      bgColor: "#FEF077",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/graffity/persons/generals_band_2.png",
    },
    {
      name: "IOCA",
      bgColor: "#F18767",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/graffity/persons/ioca_band.png",
    },
    {
      name: "IOCA",
      bgColor: "#F18767",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/graffity/persons/ioca_band_1.png",
    },
    {
      name: "JFA",
      bgColor: "#4C3B8F",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/graffity/persons/jfa_band_1.png",
    },
    {
      name: "JFA",
      bgColor: "#4C3B8F",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/graffity/persons/jfa_band.png",
    },
    {
      name: "SK8",
      bgColor: "#5E3833",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/graffity/persons/sk_band_1.png",
    },
    {
      name: "SK8",
      bgColor: "#5E3833",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/graffity/persons/sk_band_2.png",
    },
    {
      name: "Skate punks",
      bgColor: "#0597A7",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/graffity/persons/skatepunk_band_1.png",
    },
    {
      name: "Skate punks",
      bgColor: "#0597A7",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/graffity/persons/skatepunk_band_2.png",
    },
    {
      name: "TYGOLB",
      bgColor: "#90A4AE",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/graffity/persons/tygolb_band_1.png",
    },
    {
      name: "TYGOLB",
      bgColor: "#90A4AE",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/graffity/persons/tygolb_band_2.png",
    },
    {
      name: "WBAFT",
      bgColor: "#AFB42B",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/graffity/persons/wbaft_band_1.png",
    },
    {
      name: "WBAFT",
      bgColor: "#AFB42B",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/graffity/persons/wbaft_band_2.png",
    },
  ],
};
game.croundfanding = {
  links: {
    allegro: "https://allegro.pl/",
    patronitePl: "https://patronite.pl/",
    auction: "graffity",
  },
  goal: "",
};
game.recommendations = recommendationsData;
// game.workshopsHistory = workshopsList.a;

export default game;
