import historicalGames from './games/categories/historicalGames';
import civicActivismGames from './games/categories/civicActivismGames';
import artGames from './games/categories/artGames';
import itGames from './games/categories/itGames';
import { client } from './commerce';

const allGamesList = [].concat(historicalGames, civicActivismGames, artGames, itGames);

// commerceJs
const merchant = await client.merchants.about(),
	cart = await client.cart.retrieve(), // store
	categoriesList = await client.categories.list(),
	{ data: products } = await client.products.list();

let gameList = [];

const mergeGameData = (game, commerceJsProduct) =>
	Object.assign(game, {
		commerceJs: {
			price: commerceJsProduct.price.raw,
			inventory: commerceJsProduct.inventory.available,
			sku: commerceJsProduct.sku,
			thankYouUrl: commerceJsProduct.thank_you_url,
			conditionals: commerceJsProduct.conditionals,
			collects: commerceJsProduct.collects,
			checkoutUrl: commerceJsProduct.checkout_url
		}
	});

const findGame = () => {
	let foundedGame;

	products.forEach((product) => {
		foundedGame = allGamesList.find((game) => game.promo.idCommerceJs === product.id);
		gameList.push(mergeGameData(foundedGame, product));
	});
};

export async function load({ params }) {
	findGame();

	return {
		allGamesList: gameList,
		merchant: merchant,
		cart: cart,
		categories: categoriesList,
		gameList: gameList
	};
}
