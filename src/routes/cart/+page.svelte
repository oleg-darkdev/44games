<script>
	import { Header, Footer } from '../../widgets';
	import { CartItem } from '../../features';
	import { CartSummary, CartPromoCode, Warranty } from '../../entities';
	export let data;

	let promoCode = '',
		summary;
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
				<!-- {#each data.cartData.line_items as item (item.id)}
					<CartItem {data} {item} />
				{/each} -->
			</div>

			<div class="flex max-w-sm flex-col p-6">
				<CartSummary {summary} />
				<CartPromoCode {promoCode} />
				<Warranty />
			</div>
		</div>
	</section>
</main>
<Footer />
