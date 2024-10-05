<script>
	import { page } from "$app/stores";
	import logo from "$lib/assets/logo.webp";
	import Dialog from "$lib/Dialog.svelte";
	import Calendly from "$lib/vendors/Calendly.svelte";
	import Paypal from "./vendors/Paypal.svelte";
</script>

<a href="#main-content" class="skip-link"> Skip to content </a>
<header>
	<div class="container">
		<div class="corner">
			<a href="/" tabindex="-1">
				<img src={logo} alt="SvelteKit" class="nav-logo" />
			</a>
		</div>

		<nav>
			<ul>
				<li
					aria-current={$page.url.pathname === "/about"
						? "page"
						: undefined}
				>
					<a href="/about">About</a>
				</li>
				<li
					aria-current={$page.url.pathname === "/visit"
						? "page"
						: undefined}
				>
					<a href="/visit">Visit</a>
				</li>
				<li
					aria-current={$page.url.pathname.startsWith("/support")
						? "page"
						: undefined}
				>
					<a href="/support">Support</a>
				</li>
				<li class="mobile-hidden">
					<Dialog name="Donate" id="header-donate-desktop">
						<Paypal />
					</Dialog>
				</li>
				<li class="mobile-hidden">
					<Dialog
						name="Schedule Visit"
						id="header-calendly-visit-desktop"
					>
						<Calendly />
					</Dialog>
				</li>
			</ul>
		</nav>
	</div>
</header>

<style>
	.skip-link {
		left: -999rem;
		position: absolute;
		&:focus {
			background-color: white;
			display: block;
			left: 0;
			padding: 0.5rem;
			z-index: 5000;
		}
	}
	header {
		position: sticky;
		top: 0;
		z-index: 10;
		background-color: var(--body);
		padding-block: 1rem;
	}
	.container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: min(100% - 2rem, 84rem);
	}

	.nav-logo {
		width: 60%;
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current="page"]::before {
		--size: 6px;
		content: "";
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--brand);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--brand);
	}

	@media (max-width: 767px) {
		header {
			padding-bottom: 0;
		}
		.container {
			display: flex;
			flex-wrap: wrap;
		}
		.corner {
			margin-bottom: var(--size-4);
		}

		.corner,
		nav {
			width: 100%;
		}

		.corner img {
			width: 230px;
			margin-inline: auto;
		}

		li {
			display: flex;
			justify-content: center;
			padding-left: 0;
		}
		li a {
			height: 40px;
			display: inline-flex;
			width: 100%;
			justify-content: center;
		}

		ul {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			grid-template-rows: auto auto;
			height: 100%;
			padding-inline: 0;
		}
	}
</style>
