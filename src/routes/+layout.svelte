<script>
	import Header from "$lib/Header.svelte";
	import "../app.css";
	import Footer from "$lib/Footer.svelte";
	import MobileDrawer from "$lib/MobileDrawer.svelte";
</script>

<div class="app">
	<Header />

	<main id="main-content">
		<slot />
	</main>

	<Footer />
	<MobileDrawer />
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		margin: 0 auto;
	}
</style>
