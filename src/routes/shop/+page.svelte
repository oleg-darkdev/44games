<script>
	import FiltresItCategory from '../../features/ui/FiltresItCategory.svelte';

	import { Header, Footer, GamesCategorySection } from '../../widgets';

	export let data;
	// console.log(data.cartData);
</script>

<Header cartData={data.cartData} />

<main class="flex flex-col ">
	<h1 class="mb-4 pl-12 text-7xl text-gray-200">44games shop</h1>

	{#each data.allGamesList as filredGamesList}
		<section class="wrapper mt-6 mb-6 flex flex h-auto items-center rounded-xl p-2">
			<FiltresItCategory />
			<GamesCategorySection
				cart={data.cart}
				games={filredGamesList.data}
				categoryTitle={filredGamesList.category}
			/>
		</section>
	{/each}
</main>
<Footer />

<style>
	.wrapper:nth-child(odd) {
		flex-wrap: wrap;
		flex-direction: row-reverse;
	}
	.wrapper:nth-child(even) {
		flex-wrap: wrap;
		flex-direction: row;
	}
</style>
