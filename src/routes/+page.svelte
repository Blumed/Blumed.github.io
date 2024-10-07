<script>
	import IconGroup from "$lib/assets/icons/IconGroup.svelte";
	import IconIndoor from "$lib/assets/icons/IconIndoor.svelte";
	import IconOutdoor from "$lib/assets/icons/IconOutdoor.svelte";
	import heroBackground from "$lib/assets/home-hero.webp";
	import Hero from "$lib/Hero.svelte";
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<Hero
	title="Supporting people with disabilities to show up (joy)fully"
	content="A free drop-in recreational facility in Northfield, Minnesota that
			supports people with disabilities, their families and their
			communities."
	{heroBackground}
/>

<section class="section">
	<div class="container">
		<div class="cards column-3">
			<article class="card">
				<div class="card-icon">
					<IconIndoor width="100%" />
				</div>
				<h2>Indoor recreation center for events, play, and learning</h2>
			</article>

			<article class="card">
				<div class="card-icon">
					<IconOutdoor width="100%" />
				</div>
				<h2>
					Our accessible grounds are great for a day of relaxation and
					adventure
				</h2>
			</article>

			<article class="card">
				<div class="card-icon">
					<IconGroup width="100%" />
				</div>
				<h2>Group activities and fun for the whole family</h2>
			</article>
		</div>
	</div>
</section>

<style>
	.card {
		padding: var(--size-8) var(--size-5) var(--size-4);
		& h2 {
			margin: auto;
			text-align: center;
			font-size: var(--font-size-fluid-1);
		}
	}
	.card-icon {
		width: 80px;
		margin-inline: auto;
		background-color: var(--body);
		border: 1px solid var(--text-1);
		border-radius: 50%;
		padding: 8px;
		margin-bottom: var(--size-3);
	}
</style>
