<script>
	import { FooterLink } from '../../shared';

	// https://czachagames.pl/czas-i-koszty-dostawy/
	const firstColumnLinks = [
		{
			text: 'Czas i koszty dostawy',
			link: ''
		},
		{
			text: 'Czas i koszty dostawy',
			link: ''
		},
		{
			text: 'Kontact',
			link: ''
		},
		{
			text: 'Reklamacje i zwroty',
			link: ''
		},
		{
			text: 'Czas realizacji zamówień',
			link: ''
		},
		{
			text: 'Bezpieczne zakupy',
			link: ''
		},
		{
			text: 'Program Lojalnościowy',
			link: ''
		},
		{
			text: 'Sposoby płatności',
			link: ''
		}
	];

	const secondColumnLinks = [
		{
			text: 'Warsztaty',
			link: ''
		},
		{
			text: 'O nas',
			link: ''
		},
		{
			text: 'Instrukcje',
			link: ''
		},
		{
			text: 'Opinie Klientów',
			link: ''
		}
	];
</script>

<footer class="footer bg-base-200 p-10 text-base-content">
	<div>
		<img class="h-40 w-auto" src="./images/44_cubes.svg" alt="" />
		<!-- <p>44Games<br />DarkDev progect od 2019 roku działamy</p> -->
	</div>
	<div>
		<span class="footer-title">Obsługa płatności</span>
		<a class="link-hover link">
			<img
				src="https://czachagames.pl/wp-content/uploads/2018/11/payu-logo.png"
				class="h-20 w-auto rounded-lg"
				alt=""
			/>
		</a>
	</div>
	<div>
		<span class="footer-title">Obsługa klienta</span>
		{#each firstColumnLinks as link}
			<FooterLink {link} />
		{/each}
	</div>
	<div>
		<span class="footer-title">Warto zajrzeć</span>
		{#each secondColumnLinks as link}
			<FooterLink {link} />
		{/each}
	</div>
</footer>
