<script>
  export let cartData;

  // console.log(cartData) line_items
  // console.log(cart.subtotal.raw)
  // console.log(cart.)
    /*
    total_items
    subtotal.raw
    id
    hosted_checkout_url
    discount // []

  */

</script>



<span class="text-lg text-gray-800 font-bold">{cartData.total_items} Items</span>
<span class="text-gray-900">Subtotal: ${cartData.subtotal.raw}</span>
<div class="card-actions">
	<a href='/cart' class="btn-gray-900 btn-block btn">View cart</a>
</div>
