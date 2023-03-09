<script>
  import BtnGroup from "../../entities/";

  // console.log(data);
  export let item, data;
</script>

<a
	href="/"
	class="m-1 flex max-w-2xl flex-col rounded-lg border border-gray-200  bg-gray-800 text-gray-500 shadow-md md:max-w-xl md:flex-row"
	><img
		class="h-96 w-96 rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
		src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.explicit.bing.net%2Fth%3Fid%3DOIP.4d7Emr_d4fJnEE6zK7pj_wHaFK%26pid%3DApi&f=1&ipt=95853ba69f0fde7080b0808bb11c93414103fb28936f6f8d6f87cc223294a923&ipo=images"
		alt={item.product_name}
	/>
	<div class="flex flex-col p-4 sm:p-6">
		<div>
			<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
				{item.product_name}
			</h5>
			<p class="mb-3 font-normal leading-tight text-gray-700 dark:text-gray-400">
				Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
				chronological order.
			</p>
			<!-- {#if item.showFull}
									{item.game.promo.name}
								{/if} -->
		</div>
		<div class="flex items-center justify-between">
			<span class="text-3xl font-bold text-gray-900 dark:text-white">{item.price.raw}$</span>
      <!-- <BtnGroup {item} {data} /> -->
		</div>
	</div>
</a>
