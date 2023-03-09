<script>
	import { CartHeaderBtn } from '../../features';
	import { UserMenuBtn, BurgerMenu } from '../../entities';

	const cartTotal = {
		items: 9, // store length
		price: 1350
	};

	export let cartData;
	// console.log(cartData);


</script>

<header>
	<div class="navbar bg-gray-800">
		<div class="navbar-start">
			<BurgerMenu />
		</div>
		<div class="navbar-center">
			<a class="btn-ghost btn text-xl normal-case">
				<div class="w-48 rounded">
					<img src="/images/logo.svg" />
				</div>
			</a>
		</div>
		<div class="navbar-end">
			<div class="flex-none">
				<CartHeaderBtn {cartData} />
				<UserMenuBtn />
			</div>
		</div>
	</div>
</header>
