<script lang="ts">
	import Header from "$lib/components/Navbar/Navbar.svelte";
	import "$lib/assets/styles/style.css";
    import { Position } from "$lib/models/position";
	import type { Product } from "$lib/types/types";

	let product:Product =
	{
	Id:1,
	Code: 'test',
	Name: "testname",
	Price: 12,
	Picture:"https://candyweb.pl/wp-content/uploads/2020/02/google-grafika.png"

	};
	let position:Position[]= [new Position(1,product)]

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
		<p>Designed by Krycu</p>	
</footer>
	
</div>

<style>	.app {
	height: auto;
	min-height: 100vh;
	display: flex;
	
	flex-direction: column;	
}
	.navbar {
		position: sticky;
		top: 0;
		height: 5vh;
		flex-grow: 0;
  		flex-shrink: 0;
		box-shadow: 0.1em 0.1em 0.1em 0.1em gray;
		background-color: rgb(139, 179, 179);
	}

	main {
		display: flex;
		flex-direction: row;
		padding: 1rem;
		width: 100%;
		min-height: 85vh;
		margin: 0;
		box-sizing: border-box;
		flex-grow: 1;
	}

	footer {
		position: sticky;
		bottom: 0;
		color: white;
		display: flex;
		flex-direction: column;
		justify-content: center;
		flex-grow: 0;
  		flex-shrink: 0;
		background-color: rgb(139, 179, 179);
		align-items: center;
		padding: 10px;
		text-decoration: none;
		font-family: "Courier New", Courier, monospace;
		font-weight: bold;
		letter-spacing: 0.2em;
		height: 5%;
		box-shadow: 0.1em 0.1em 0.1em 0.1em gray;

	}

</style>
