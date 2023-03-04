class Game {
	constructor() {
		this.promo = {
			name: '',
			shortName: '',
			banner: '',
			logo: '',
			promo: '',
			status: 0,
			shortDescription:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			brandColor: '#47babb',
			id: '',
			serial: '',
			price: 0,
			categories: ['lorem', 'lorem', 'lorem', 'lorem'],
			sale: '0'
		};
		this.croundfanding = {
			links: {
				allegro: '',
				patronitePl: '',
				auction: ''
			},
			goal: ''
		};
		this.workShopsReports = [
			{
				date: '',
				img: '',
				linkInstagram: ''
			}
		];
		this.moreInfo = {
			players: '2-8',
			age: '16+',
			time: '120-180',
			LOR: [
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			],
			lorImg: '',
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
		this.updates = [
			{
				date: '',
				persons: '',
				mechanic: '',
				map: '',
				version: ''
			}
		];
		this.roles = {
			description: [
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
			],
			banner: '',
			characters: [
				{
					name: 'Lorem ipsum',
					description:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
					img: ''
				}
			]
		};
		this.resources = [
			{
				name: '',
				type: 'pdf',
				link: ''
			}
		];
		this.videos = [
			{
				img: '',
				link: '',
				name: '',
				type: 'video'
			}
		];
		this.lor = {
			text: [
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
			],
			lorImg: ''
		};
		this.expansions = [
			{
				name: '', // The Riverfolk Expansion
				img: '', // https://cdn.shopify.com/s/files/1/0106/0162/7706/products/10-RootUnderworldBox-Edit-Web_250x.png?v=1595310452
				fullInfo: {
					name: ''
				} // for expansion page
			}
		];
		this.recommendations = [
			{
				path: '', // gamesData.graffity.promo.promo,
				id: '', // gamesData.graffity.promo.serial,
				link: '' //  gamesData.graffity.promo.id
			},
			{
				path: '',
				id: '',
				link: ''
			}
		];
		this.faq = {
			basicFAQ: [
				{
					question: 'Sorry 💙... Write soon',
					answer: 'Sorry 💙... Write soon'
				}
			],
			popularFaq: [
				{
					question: 'Sorry 💙... Write soon',
					answer: 'Sorry 💙... Write soon'
				}
			],
			otherFaq: [
				{
					question: 'Sorry 💙... Write soon',
					answer: 'Sorry 💙... Write soon'
				}
			]
		};
	}
	get promo() {
		return this._promo;
	}
	get croundfanding() {
		return this._croundfanding;
	}
	get workShopsReports() {
		return this._workShopsReports;
	}
	get moreInfo() {
		return this._moreInfo;
	}
	get updates() {
		return this._updates;
	}
	get resources() {
		return this._resources;
	}
	get videos() {
		return this._videos;
	}
	get resources() {
		return this._resources;
	}
	get expansions() {
		return this._expansions;
	}
	get roles() {
		return this._roles;
	}
	get faq() {
		return this._faq;
	}
	get recommendations() {
		return this._recommendations;
	}

	set recommendations(value) {
		this._recommendations = value;
	}
	set faq(value) {
		this._faq = value;
	}

	set roles(value) {
		this._roles = value;
	}

	set promo(value) {
		this._promo = value;
	}
	set croundfanding(value) {
		this._croundfanding = value;
	}
	set workShopsReports(value) {
		this._workShopsReports = value;
	}
	set moreInfo(value) {
		this._moreInfo = value;
	}
	set updates(value) {
		this._updates = value;
	}
	set resources(value) {
		this._resources = value;
	}
	set videos(value) {
		this._videos = value;
	}
	set resources(value) {
		this._resources = value;
	}
	set expansions(value) {
		this._expansions = value;
	}
}


export default Game;
