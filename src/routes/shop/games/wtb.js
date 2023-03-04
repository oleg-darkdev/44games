import GameClass from "./gameClass";
import categoriesGames from "./categoriesGames.js";

// import faq from '../faq/questionsGames';

let game = new GameClass();
// game.faq = faq.a;
game.promo = {
  name: "🎥 Repression of journalists in Belarus.",
  shortName: "🎥 WTB",
  banner: "img/games/banners/wtb_banner.png",
  landingBanner: "",
  logo: "img/games/logos/wtb_logo.png",
  promo: "",
  status: 1, // 0 - alfa, 1 - beta, 2 - good,
  shortDescription: "",
  brandColor: "#E4262E",
  id: "wtb",
  serial: "",
  price: "",
};
game.croundfanding = {
  links: {
    allegro: "https://allegro.pl/",
    patronitePl: "https://patronite.pl/",
    auction: "wtb",
  },
  goal: "",
};

export default game;
