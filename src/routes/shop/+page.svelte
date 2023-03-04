<script>
	import GamesCategorySection from '../../widgets/ui/GamesCategorySection.svelte';
	import FiltresItCategory from '../../features/ui/FiltresItCategory.svelte';
	import Header from '../../widgets/ui/Header.svelte';
	import Footer from '../../widgets/ui/Footer.svelte';

	export let data;

	// console.log(data.allGamesList);
</script>

<Header />
<main class="flex flex-col ">
	<h1 class="mb-4 pl-4 text-7xl text-gray-200">44games shop</h1>

	<section class="flex flex h-auto flex-row flex-wrap items-center rounded-xl p-2">
		<FiltresItCategory />
		<GamesCategorySection games={data.allGamesList.it} categoryTitle="About IT" />
	</section>
	<section class="flex flex h-auto flex-row flex-wrap-reverse items-center rounded-xl p-2">
		<GamesCategorySection games={data.allGamesList.art} categoryTitle="About ART" />
		<FiltresItCategory />
	</section>
	<section class="flex flex h-auto flex-row flex-wrap items-center rounded-xl p-2">
		<FiltresItCategory />
		<GamesCategorySection games={data.allGamesList.historical} categoryTitle="Historical" />
	</section>
	<section class="mb-12 flex flex h-auto flex-row flex-wrap-reverse items-center rounded-xl p-2">
		<GamesCategorySection
			games={data.allGamesList.civicActivism}
			categoryTitle="About Social Activism"
		/>
		<FiltresItCategory />
	</section>
</main>
<Footer />

<!--
		 -->
