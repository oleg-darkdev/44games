import GameClass from "./gameClass";
import categoriesGames from "./categoriesGames.js";

// import faq from '../faq/questionsGames';

let game = new GameClass();
// game.faq = faq.a;
game.promo = {
  name: "📟 Hackerspace",
  shortName: "📟 Hackerspace",
  banner: "img/games/banners/hackerspace_banner.png",
  landingBanner: "",
  logo: "img/games/logos/hackerspace_logo.png",
  promo: "",
  status: 1, // 0 - alfa, 1 - beta, 2 - good,
  shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  brandColor: "#537A2D",
  id: "hackerspace",
  serial: "",
  price: "",
  categories: [
    categoriesGames[2],
    categoriesGames[4],
    categoriesGames[7],
    categoriesGames[6],
  ],
};
game.croundfanding = {
  links: {
    allegro: "https://allegro.pl/",
    patronitePl: "https://patronite.pl/",
    auction: "hackerspace",
  },
  goal: "",
};

export default game;
