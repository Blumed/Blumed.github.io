<script>
	import Header from "$lib/Header.svelte";
	import "../app.css";
	import Footer from "$lib/Footer.svelte";
	import MobileDrawer from "$lib/MobileDrawer.svelte";
	import { browser } from "$app/environment";
	import IconUpArrow from "$lib/assets/icons/IconUpArrow.svelte";
	import { onNavigate } from "$app/navigation";

	let toggleBackToTop = false;

	function initObserver() {
		if (browser) {
			const backToTopHandler = (entries) => {
				if (!entries[0].isIntersecting) {
					toggleBackToTop = true;
				} else {
					toggleBackToTop = false;
				}
			};
			const observer = new window.IntersectionObserver(backToTopHandler);
			observer?.observe(document.querySelector(".hero"));
		}
	}

	function backToTop() {
		if (browser) {
			toggleBackToTop = false;
			window.scrollTo({ top: 0, behavior: "smooth" });
		}
	}
	initObserver();
	$: toggleBackToTop = toggleBackToTop;
	$: toggleBackToTop && initObserver();

	// onNavigate((navigation) => {
	// 	if (!document.startViewTransition) return;

	// 	return new Promise((resolve) => {
	// 		document.startViewTransition(async () => {
	// 			resolve();
	// 			await navigation.complete;
	// 		});
	// 	});
	// });
</script>

<div class="app">
	<Header />

	<main id="main-content">
		<slot />
	</main>

	<Footer />
	<button
		type="button"
		class="btn-back-to-top"
		class:is-visible={toggleBackToTop}
		on:click={() => backToTop()}><IconUpArrow /></button
	>
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
	.btn-back-to-top {
		position: fixed;
		right: 35px;

		bottom: -50px;
		width: 50px;
		height: 50px;
		border: 1px solid #ddd;
		border-radius: 50%;
		padding: 0;
		background-color: rgba(255, 255, 255, 0.5);
		backdrop-filter: blur(2px);
		color: var(--bs-primary);
		display: flex;
		justify-content: center;
		align-items: center;
		transition: bottom 0.3s ease;
		z-index: 10;

		&.is-visible {
			bottom: 80px;
		}

		& > * {
			position: relative;
			top: -1px;
			height: 16px;
			width: 16px;
		}

		&:hover i {
			top: -3px;
			transition: top 0.3s ease;
		}
	}
</style>
