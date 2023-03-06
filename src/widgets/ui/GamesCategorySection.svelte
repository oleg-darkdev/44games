<script>
	import Carousel from '../../features/ui/Carousel.svelte';

	export let games, categoryTitle;
</script>

<div class="flex h-auto flex-col  rounded-xl bg-gray-900 p-6 lg:w-9/12 xl:w-9/12 md:w-9/12 w-full">
	<h2 class="mb-4 pl-8 w-full text-left text-5xl text-gray-200">{categoryTitle}</h2>
    	<Carousel
		{games}
		controlColor={'white'}
		controlScale={0.8}
		autoplay={true}
		autoplaySpeed={3000}
	>
  </Carousel>
</div>
