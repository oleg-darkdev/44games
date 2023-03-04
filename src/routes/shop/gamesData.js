import historicalGames from './games/categories/historicalGames';
import civicActivismGames from './games/categories/civicActivismGames';
import artGames from './games/categories/artGames'; // graffity, tattoo,
import itGames from './games/categories/itGames'; // linux, kanbanel,
// import politicalGames from './politicalGames';
// import economicalGames from './economicalGames';
// import strategicGames from './strategicGames'; // ksg
// import officeGames from './officeGames'; // spyral linux, kanbanel,
// import managementGames from './managementGames'; // spyral kanbanel,


// 🕋 Urbanism. Society of the future.', ',

function getGames(gamesCategory) {
	let arrayTemp = [],
		key;
	for (key in gamesCategory) {
		arrayTemp.push(gamesCategory[key]);
	}
	return arrayTemp;
}


let allGamesList = {
	categories: {
		civicActivism: civicActivismGames,
		historical: historicalGames,
		art: artGames, 
		it: itGames,
		// politicalGames: politicalGames,
		// economicalGames: economicalGames,
		// strategicGames: strategicGames,
		// officeGames: officeGames,
		// managementGames: managementGames
	},
	all: [].concat(getGames(historicalGames), getGames(civicActivismGames)),

	// historicalGames
	gulagUSSR: historicalGames.gulagUSSR,
	// katyn: historicalGames.katyn,
	// yakusa: historicalGames.yakusa,
	// wtb: historicalGames.wtb,
	// wikileaks: historicalGames.wikileaks,
	covid: historicalGames.covid,
	ksg: historicalGames.ksg,
	// gulagRussia:  . ,
	// : historicalGames. ,

	// civicActivismGames
	a: civicActivismGames.a,
	fnb: civicActivismGames.fnb,
	// eco: civicActivismGames.eco,
	squat: civicActivismGames.squat,
	// hackerspace: civicActivismGames.hackerspace,
	lgbt: civicActivismGames.lgbt,
	ror: civicActivismGames.ror,
	//  : civicActivismGames,



	// artGames
	graffity:  artGames.graffity,
	// tattoo:  artGames.tattoo ,

	// itGames
	kanbanel:  itGames.kanbanel,
	linux:  itGames.linux,

};

export default allGamesList;
