<script>
	import convertObjectToArray from '../lib/convertObjectToArray';
	import Carousel from '../../features/ui/Carousel.svelte';

	export let games, categoryTitle;
</script>

<section class="m-12 flex h-auto flex-col  rounded-xl bg-gray-900 p-6">
	<h2 class="mb-4 w-full text-left text-5xl text-gray-200">{categoryTitle}</h2>
    	<Carousel
		games={[].concat(convertObjectToArray(games))}
		controlColor={'white'}
		controlScale={0.8}
		autoplay={true}
		autoplaySpeed={3000}
	>
  </Carousel>
</section>
