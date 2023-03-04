import GameClass from "../gameClass";
import regularData from "./regularData";
import recommendationsData from "./recommendations";

let game = new GameClass();
/*
	Universal data for all languages
*/
// promo;
game.promo.banner = regularData.promo.banner;
game.promo.landingBanner = regularData.promo.landingBanner;
game.promo.logo = regularData.promo.logo;
game.promo.promo = regularData.promo.promo;
game.promo.status = regularData.promo.status;
game.promo.brandColor = regularData.promo.brandColor;
game.promo.id = regularData.promo.id;
game.promo.serial = regularData.promo.serial;
game.promo.price = regularData.promo.price;
// moreInfo
game.moreInfo.players = regularData.moreInfo.players;
game.moreInfo.age = regularData.moreInfo.age;
game.moreInfo.time = regularData.moreInfo.time;
game.moreInfo.lorImg = regularData.moreInfo.lorImg;
game.moreInfo.photos = regularData.moreInfo.photos;
// other
game.recommendations = recommendationsData;
game.croundfanding = regularData.croundfanding;
game.roles.banner = regularData.roles.banner;
game.roles.characters = regularData.roles.characters;

export default game;
