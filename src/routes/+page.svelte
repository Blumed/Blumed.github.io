<script>
	import IconGroup from "$lib/assets/icons/IconGroup.svelte";
	import IconIndoor from "$lib/assets/icons/IconIndoor.svelte";
	import IconOutdoor from "$lib/assets/icons/IconOutdoor.svelte";
	import image from "$lib/assets/home-hero.webp";
	import Hero from "$lib/Hero.svelte";
	import Visit from "$lib/Visit.svelte";
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<Hero
	title="Fostering joy through accessible recreation"
	content="A free drop-in recreational facility in Northfield, Minnesota that
			supports people with disabilities, their families and their
			communities."
	{image}
/>

<section class="section">
	<div class="container">
		<div class="cards column-3">
			<article class="card">
				<div class="card-icon">
					<IconIndoor width="100%" />
				</div>
				<h2>Indoor recreation center with flexible activities</h2>
			</article>

			<article class="card">
				<div class="card-icon">
					<IconOutdoor width="100%" />
				</div>
				<h2>Outdoor interactive spaces for all ages to relax & play</h2>
			</article>

			<article class="card">
				<div class="card-icon">
					<IconGroup width="100%" />
				</div>
				<h2>Programs & events to build community</h2>
			</article>
		</div>
	</div>
</section>
<Visit
	title="Ready for Your Great Day?"
	copy="Plan your visit to the farm via our online calendar!"
	button_text="Sign Up"
/>

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
