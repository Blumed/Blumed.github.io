<script>
	import heroImage from "$lib/assets/home-hero.jpg";
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="section">
	<h1>A Good Day Farm
	</h1>
	<p>A Recreational Facility for Developmentally<br />Disabled Individuals</p>
	<picture>
		<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
			<defs>
				<clipPath id="svg-draw">
					<path
						d="M53.2,-44.9C64.1,-28.8,64.7,-6.9,61.2,16.1C57.7,39.2,50,63.5,32.1,75.6C14.2,87.6,-13.9,87.4,-35.9,76.2C-57.9,65,-73.7,42.7,-75.6,21C-77.6,-0.6,-65.6,-21.7,-50.7,-38.7C-35.7,-55.8,-17.9,-68.8,1.6,-70.2C21.1,-71.5,42.3,-61,53.2,-44.9Z"
						transform="translate(100 100)"
					/>
				</clipPath>
			</defs>

			<image
				clip-path="url(#svg-draw)"
				height="200"
				width="200"
				xlink:href={heroImage}
			/>
		</svg>
	</picture>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		color: var(--color-white);
	}

	h1 {
		width: 100%;
	}

	/* .welcome {
		display: block;
		position: relative;
		width: 100%; */
		/* height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	} */

	/* .welcome picture {
		position: absolute;
		width: 100%;
		inset: 0;
		display: block;
		object-fit: cover;
		z-index: -1;
	} */
</style>
