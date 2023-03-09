<script>
	const identifyGamesOnCart = (gamesList, product) =>
		gamesList.find((game) => game.promo.idCommerceJs === product);

	export let item, data;
</script>

<div class="btn-group">
	<button class="btn ">Del</button>
	<button
		on:click={() => {
			item.game = identifyGamesOnCart(data.allGames, item.product_id);
			item.showFull = !item.showFull;
		}}
		class="btn-info btn">More</button
	>
</div>
