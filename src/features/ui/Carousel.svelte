<script>
	import { flip } from 'svelte/animate';
	import { onDestroy } from 'svelte';
	import { CardShop } from '../index';

	export let games,
		cart,
		speed = 200,
		controlColor = '#444',
		controlScale = '0.5',
		autoplay = false,
		autoplaySpeed = 7000,
		displayControls = true;

	let interval;

	const rotateLeft = (e) => {
		const transitioningImage = games[games.length - 1];
		document.getElementById(transitioningImage.promo.serial).style.opacity = 0;
		games = [games[games.length - 1], ...games.slice(0, games.length - 1)];
		setTimeout(
			() => (document.getElementById(transitioningImage.promo.serial).style.opacity = 1),
			speed
		);
	};

	const rotateRight = (e) => {
		const transitioningImage = games[0];
		document.getElementById(transitioningImage.promo.serial).style.opacity = 0;
		games = [...games.slice(1, games.length), games[0]];
		setTimeout(
			() => (document.getElementById(transitioningImage.promo.serial).style.opacity = 1),
			speed
		);
	};

	const startAutoPlay = () => {
		if (autoplay) {
			interval = setInterval(rotateLeft, autoplaySpeed);
		}
	};

	const stopAutoPlay = () => {
		clearInterval(interval);
	};

	if (autoplay) {
		startAutoPlay();
	}

	onDestroy(() => {
		stopAutoPlay();
	});
</script>
<!-- -->
<div id="carousel-container">
	<div id="carousel-images">
		{#each games as game (game.promo.serial)}
			<div on:mouseover={stopAutoPlay}
				on:mouseout={startAutoPlay}
				animate:flip={{ duration: speed }} >
				<CardShop {game} {cart} />
			</div>
		{/each}
	</div>
	{#if displayControls}
		<button id="left" on:click={rotateLeft}>
			<slot name="left-control">
				<svg width="39px" height="110px" id="svg8" transform={`scale(${controlScale})`}>
					<g id="layer1" transform="translate(-65.605611,-95.36949)">
						<path
							style={`fill:none;stroke:${controlColor};stroke-width:9.865;stroke-linecap:round;stroke-linejoin:bevel;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1`}
							d="m 99.785711,100.30199 -23.346628,37.07648 c -7.853858,12.81098 -7.88205,12.81098 0,24.78902 l 23.346628,37.94647"
							id="path1412"
						/>
					</g>
				</svg>
			</slot>
		</button>
		<button id="right" on:click={rotateRight}>
			<slot name="right-control">
				<svg width="39px" height="110px" id="svg8" transform={`rotate(180) scale(${controlScale})`}>
					<g id="layer1" transform="translate(-65.605611,-95.36949)">
						<path
							style={`fill:none;stroke:${controlColor};stroke-width:9.865;stroke-linecap:round;stroke-linejoin:bevel;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1`}
							d="m 99.785711,100.30199 -23.346628,37.07648 c -7.853858,12.81098 -7.88205,12.81098 0,24.78902 l 23.346628,37.94647"
							id="path1412"
						/>
					</g>
				</svg>
			</slot>
		</button>
	{/if}
</div>

<style>
	#carousel-container {
		width: 100%;
		position: relative;
		display: flex;
		flex-direction: column;
		overflow-x: hidden;
		/* margin: 6px; */
	}
	#carousel-images {
		display: flex;
		justify-content: center;
		flex-wrap: nowrap;
		-webkit-mask: linear-gradient(to right, transparent, black 40%, black 60%, transparent);
		mask: linear-gradient(to right, transparent, black 40%, black 60%, transparent);
	}

	button {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		display: flex;
		align-items: center;
		justify-content: center;
		background: transparent;
		border: none;
	}

	button:focus {
		outline: auto;
	}

	#left {
		left: 10px;
	}

	#right {
		right: 10px;
	}
</style>
