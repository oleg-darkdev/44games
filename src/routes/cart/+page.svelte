<script>
	import { Header, Footer } from '../../widgets';
	export let data;
	console.log(data.allGames);

	const identifyGamesOnCart = (gamesList, product) =>
		gamesList.find((game) => game.promo.idCommerceJs === product);
</script>

<!-- hosted_checkout_url
line_items[0].product_id
subtotal.raw
total_items -->

<Header cartData={data.cartData} />
<main class="">
	<section class="m-12 flex h-auto flex-col items-center rounded-xl bg-gray-900 p-6">
		<h1 class="mb-4 pl-12 text-7xl text-gray-200">44games shop</h1>
		<div class="flex flex-row flex-wrap rounded-xl p-6">
			<div class="flex max-w-2xl flex-wrap flex-wrap justify-center">
				{#each data.cartData.line_items as item (item.id)}
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
								<span class="text-3xl font-bold text-gray-900 dark:text-white"
									>{item.price.raw}$</span
								>
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
							</div>
						</div>
					</a>
				{/each}
			</div>

			<div class="flex max-w-sm flex-col p-6">
				<div class="mb-2 flex flex-col rounded-lg bg-gray-800 p-6">
					<div class="mb-6 flex flex-row justify-between">
						<span class="w-60">Razem: 1 produkt</span> <span>169,95 zł</span>
					</div>
					<div class="mb-1 flex flex-row justify-between">
						<span class="w-60">Do zapłaty</span>
						<div class="flex flex-col">
							<span class="text-end">169,95 zł </span>
							<span>+ koszty dostawy</span>
						</div>
					</div>
					<div class="flex flex-row justify-between mb-4">
						<span class="w-60">Czas realizacji</span>
						<div class="flex flex-col">
							<span class="text-end">dostępny w magazynie</span>
						</div>
					</div>
					<button class="btn-xs btn sm:btn-sm md:btn-md lg:btn-lg btn-info">Dalej </button>
				</div>

				<div class="mb-8 flex flex-col rounded-lg bg-gray-800 p-6">
					<h2 class="text-2xl">Strefa zniżek</h2>
					<p class="text-1xl mb-2 text-gray-400">Masz kod rabatowy i nie zawahasz się go użyć?</p>
					<input type="text" placeholder="Kod rabatowy" class="input w-full max-w-xs" />
				</div>

				<div class="flex flex-col rounded-lg bg-gray-800 p-6">
					<h2 class="text-2xl">Nasza gwarancja</h2>
					<p class="text-1xl mb-2 text-gray-400">
						Jeżeli po zakupie któregokolwiek z naszych produktów uznasz, że nie spełnia on Twoich
						oczekiwań, w ciągu 14 dni możesz zażądać zwrotu pieniędzy!
					</p>

					<ul class="m-4">
						<li class="text-1xl text-gray-300">- powód rezygnacji NIE ma wpływu na jej uznanie</li>
						<li class="text-1xl text-gray-300">- żadnego kręcenia i urażonych uczuć</li>
						<li class="text-1xl text-gray-300">- płacisz, wymagasz, decydujesz</li>
					</ul>

					<p class="text-1xl text-gray-400">
						Zwracamy całą wpłaconą przez Ciebie kwotę wraz z kosztem przesyłki. Jedynym warunkiem
						skorzystania z gwarancji jest dostarczenie do nas produktu w nienaruszonym stanie.
					</p>
				</div>
			</div>
		</div>
	</section>
</main>
<Footer />
