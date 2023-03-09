<script>
	import { Carousel } from '../../features';

	export let games, categoryTitle, cart;
</script>

<div class="flex h-auto w-full  flex-col rounded-xl bg-gray-900 p-6 md:w-8/12 lg:w-9/12 xl:w-9/12">
	<h2 class="mb-4 w-full pl-8 text-left text-5xl text-gray-200">{categoryTitle}</h2>
	<Carousel
		{games}
		{cart}
		controlColor={'white'}
		controlScale={0.8}
		autoplay={true}
		autoplaySpeed={3000}
	/>
</div>
