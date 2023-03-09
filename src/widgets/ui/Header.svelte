<script>
	import { CartHeaderBtn } from '../../features';
	import { UserMenuBtn, BurgerMenu } from '../../entities';

	export let cartData;
</script>

<header>
	<div class="navbar bg-gray-800">
		<div class="navbar-start">
			<BurgerMenu />
		</div>
		<div class="navbar-center">
			<a class="rounded-lg p-1 text-xl normal-case hover:bg-gray-700">
				<div class="w-32 rounded">
					<img src="/images/44_cubes.svg" />
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
