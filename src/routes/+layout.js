import allGamesList from './shop/games/AllGamesList';
import CommerceSDK from '@chec/commerce.js';

const COMMERCEJS_ID_PRIVATE_KEY = import.meta.env.VITE_COMMERCEJS_ID_PRIVATE_KEY;
const client = new CommerceSDK(COMMERCEJS_ID_PRIVATE_KEY);

// commerceJs
const merchant = await client.merchants.about(),
	cartData = await client.cart.retrieve(), // store
	cart = client.cart,
	categoriesList = await client.categories.list(),
	{ data: products } = await client.products.list();

const mergeGameData = (game, commerceJsProduct) =>
	Object.assign(game, {
		commerceJs: {
			price: commerceJsProduct.price.raw,
			inventory: commerceJsProduct.inventory.available,
			sku: commerceJsProduct.sku,
			thankYouUrl: commerceJsProduct.thank_you_url,
			conditionals: commerceJsProduct.conditionals,
			collects: commerceJsProduct.collects,
			checkoutUrl: commerceJsProduct.checkout_url,
			categories: commerceJsProduct.categories
		}
	});

const mergeCommerceJsAndLocalGameData = () => {
	let foundedGame,
		resultGameList = [];

	products.forEach((product) => {
		foundedGame = allGamesList.find((game) => game.promo.idCommerceJs === product.id);
		resultGameList.push(mergeGameData(foundedGame, product));
	});

	return resultGameList;
};

let filredGames = (category) =>
	gameList.filter((element) =>
		element.commerceJs.categories.some((gameCategory) => gameCategory.slug === category)
	);

const gameList = mergeCommerceJsAndLocalGameData();
const historyGames = filredGames('historical'),
	activismGames = filredGames('social-activism'),
	artGames = filredGames('art'),
	itGames = filredGames('it');

const exportAllGamesList = [
	{ category: 'Historical', data: historyGames },
	{ category: 'Art', data: artGames },
	{ category: 'IT', data: itGames },
	{ category: 'Social activism', data: activismGames }
];

export async function load({ params }) {
	return {
		allGamesList: exportAllGamesList,
		historyGames: historyGames,
		activismGames: activismGames,
		artGames: artGames,
		itGames: itGames,
    allGames: [].concat(historyGames, activismGames, artGames, itGames),


		merchant: merchant,
		cart: cart,
		cartData: cartData,
		categories: categoriesList
	};
}
