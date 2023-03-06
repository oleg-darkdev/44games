<script>
	import GamesCategorySection from '../../widgets/ui/GamesCategorySection.svelte';
	import FiltresItCategory from '../../features/ui/FiltresItCategory.svelte';
	import Header from '../../widgets/ui/Header.svelte';
	import Footer from '../../widgets/ui/Footer.svelte';

	export let data;
  // console.log(data.allGamesList[0].data)
</script>

<Header />

<main class="flex flex-col ">
	<h1 class="mb-4 pl-12 text-7xl text-gray-200">44games shop</h1>

	{#each data.allGamesList as filredGamesList}
		<section class="flex flex h-auto wrapper  items-center rounded-xl p-2">
			<FiltresItCategory />
			<GamesCategorySection games={filredGamesList.data} categoryTitle={filredGamesList.category} />
		</section>
	{/each}
</main>
<Footer />

<style>
  .wrapper:nth-child(odd)  {
    flex-wrap: wrap;
    flex-direction: row-reverse;
  }
    .wrapper:nth-child(even )  {
    flex-wrap: wrap;
    flex-direction: row;
  }
</style>
