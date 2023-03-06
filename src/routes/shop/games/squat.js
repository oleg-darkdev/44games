import GameClass from './gameClass';
import categoriesGames from './categoriesGames.js';

// import faq from '../faq/questionsGames';
import recommendationsData from './squat/recommendations';

let game = new GameClass();
// game.faq = faq.a;
game.promo = {
	name: '🏠 Squat action',
	shortName: '🏠 Squat action',
	banner:
		'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/banners/squat_banner.png',
	landingBanner:
		'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/bg/squat_bg.png',
	logo: 'img/games/logos/squat_logo.png',
	promo: '',
	status: 1, // 0 - alfa, 1 - beta, 2 - good,
	shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	brandColor: '#47babb',
	id: 'squat',

	idCommerceJs: 'prod_O3bR5XDKQ65nzd',
	serial: '10',
	price: '',

	// categories: [categoriesGames[1],  categoriesGames[6]]
};
game.croundfanding = {
	links: {
		allegro: 'https://allegro.pl/',
		patronitePl: 'https://patronite.pl/',
		auction: 'squat'
	},
	goal: ''
};
game.moreInfo = {
	players: '2-8',
	age: '16+',
	time: '120-180',
	LOR: [
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
	],
	lorImg:
		'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/banners/squat_banner.png',
	goal: '',
	educationMoments: ['', ''],
	description: [
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
	],
	targetAudience: '',
	photos: ['', '', '']
};
game.roles = {
	description: [
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
	],
	banner:
		'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/squat/banners/squat_banner.png',
	characters: [
		{
			name: 'Cops',
			bgColor: '#191B1B',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/squat/persons/acab_person.png'
		},
		{
			name: 'White trash',
			bgColor: '#191B1B',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/squat/persons/whitetrash_person.png'
		},
		{
			name: 'Capitalist',
			bgColor: '#191B1B',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/squat/persons/capitalist_person.png'
		},
		{
			name: 'A.D.A. squat',
			bgColor: '#191B1B',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/squat/persons/ada_person.png'
		},
		{
			name: 'ELBA squat',
			bgColor: '#191B1B',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/squat/persons/elba_person.png'
		},
		{
			name: 'Hulai pole squat',
			bgColor: '#191B1B',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/squat/persons/hulaipole_person.png'
		},
		{
			name: 'Pandamia squat',
			bgColor: '#191B1B',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/squat/persons/pandemia_person.png'
		},
		{
			name: 'Przychodnia squat',
			bgColor: '#191B1B',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/squat/persons/przychodnia_person.png'
		},
		{
			name: 'Syrena squat',
			bgColor: '#191B1B',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/squat/persons/syrena_person.png'
		},
		{
			name: 'Rozbrat squat',
			bgColor: '#191B1B',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			img: 'https://raw.githubusercontent.com/oleg-darkdev/dd/deploy/static/img/games/squat/persons/rozbrat_person.png'
		}
	]
};
game.recommendations = recommendationsData;
// game.workshopsHistory = workshopsList.a;

export default game;
