import ProtoGame from "./ProtoGame";
import categoriesGames from "../categoriesGames";

// import workshopsList from '../workshopsList';
// import faq from '../faq/questionsGames';

// game.faq = faq.a;
// game.workshopsHistory = workshopsList.a;

let game = ProtoGame;
/*
	Promo block
*/
game.promo.name = "Kanbanel 📈";
game.promo.shortName = "Kanbanel 📈";
game.promo.shortDescription =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
// game.promo.categories =  [categoriesGames[1], categoriesGames[2], categoriesGames[5], categoriesGames[6]]
/*
	More Info block
*/
// game.moreInfo.LOR = [''];
// game.moreInfo.description = [''];

game.moreInfo.goal = "";
game.moreInfo.educationMoments = ["", ""];
game.moreInfo.targetAudience = "";
/* 
	Roles
*/
game.roles.description = [""];

game.roles.characters[0].description =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor";
game.roles.characters[1].description =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor";

export default game;
