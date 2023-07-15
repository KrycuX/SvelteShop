<script>
	import Header from "../components/navbar.svelte";
	import "../style/style.css";
</script>

<svelte:head>
	<title>Shop</title>
	<meta name="description" content="Sjop" />
</svelte:head>
<div class="app">
	<div class="navbar">
		<Header />
	</div>

	<main>
		<slot />
	</main>

	<footer>
		<div class="footerCont">
			<p>Designed by Krycu</p>
		</div>
	</footer>
</div>

<style>
	.footerCont {
		display: flex;
		align-items: center;
	}
	img {
		padding: 0.4rem;
		width: 1rem;
		height: 1rem;
	}
	.navbar {
		position: sticky;
		top: 0;
	}
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 80%;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		position: relative;
		color: white;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 10px;
		text-decoration: none;
		font-family: "Courier New", Courier, monospace;
		font-weight: bold;
		letter-spacing: 0.2em;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
