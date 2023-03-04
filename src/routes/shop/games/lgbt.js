import GameClass from "./gameClass";
import categoriesGames from "./categoriesGames.js";

// import faq from '../faq/questionsGames';
import recommendationsData from "./lgbt/recommendations";

let game = new GameClass();
// game.faq = faq.a;
game.promo = {
  name: "🌈 LGBT+",
  shortName: "🌈 LGBT+",
  banner:
    "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/banners/lgbt_banner.png",
  landingBanner:
    "https://raw.githubusercontent.com/oleg-darkdev/dd/d45fec7333c68c75264acfead3be04a4de16b2bf/static/img/bg/lgbt_bg.png",
  logo: "img/games/logos/lgbt_logo.png",
  promo:
    "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/landingPromo/lgbt.png",
  status: 1, // 0 - alfa, 1 - beta, 2 - good,
  shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  brandColor: "#00B1CD",
  id: "lgbt",
  serial: "7",
  price: "",
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
game.croundfanding = {
  links: {
    allegro: "https://allegro.pl/",
    patronitePl: "https://patronite.pl/",
    auction: "lgbt",
  },
  goal: "",
};
game.roles = {
  description: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  ],
  banner:
    "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/lgbt/banners/persons_banner.png",
  characters: [
    {
      name: "Torik",
      bgColor: "#A3CC81",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/lgbt/persons/torik_person.png",
    },
    {
      name: "Trixic",
      bgColor: "#A3CC81",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/lgbt/persons/trixic_person.png",
    },
    {
      name: "Mavierique",
      bgColor: "#F49823",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/lgbt/persons/mavierique_person.png",
    },
    {
      name: "Achillean",
      bgColor: "#9AC6E9",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/lgbt/persons/achillean_person.png",
    },
    {
      name: "Libra masculine",
      bgColor: "#5DBFC0",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/lgbt/persons/libra_masculine_person.png",
    },
    {
      name: "Libra feminine",
      bgColor: "#C7558E",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/lgbt/persons/librafeminine_person.png",
    },
    {
      name: "Aromantic",
      bgColor: "#000000",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/lgbt/persons/aromantic_person.png",
    },
    {
      name: "Bisexual",
      bgColor: "#1F4294",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/lgbt/persons/bisexual_person.png",
    },

    {
      name: "Bigender",
      bgColor: "#A66DAC",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/lgbt/persons/bigender_person.png",
    },
    {
      name: "Trigender",
      bgColor: "#817CBA",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/lgbt/persons/trigender_person.png",
    },

    {
      name: "Diamoric",
      bgColor: "#9ECB87",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/lgbt/persons/diamoric_person.png",
    },
  ],
};
game.recommendations = recommendationsData;
// game.workshopsHistory = workshopsList.a;

export default game;
