<script>
  export let cart, gameId;
</script>

<button
  on:click={()=> cart.add(gameId, 1).then((response) => console.log(cart))}
  class="text-center font-medium focus:ring-4 focus:outline-none inline-flex items-center justify-center px-5 py-2.5 text-sm text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded-lg"
  >Add to cart</button
>
