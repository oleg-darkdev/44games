<script>
  export let promoCode;
</script>

<div class="mb-8 flex flex-col rounded-lg bg-gray-800 p-6">
	<h2 class="text-2xl">Strefa zniżek</h2>
	<p class="text-1xl mb-2 text-gray-400">Masz kod rabatowy i nie zawahasz się go użyć?</p>
	<input type="text" bind:value={promoCode} placeholder="Kod rabatowy" class="input w-full max-w-xs" />
</div>
