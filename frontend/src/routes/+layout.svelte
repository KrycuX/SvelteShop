<script lang="ts">
	import Header from "../components/Navbar/navbar.svelte";

	import "../assets/styles/style.css";
    import { Position } from "../models/position";
	import type { Product } from "../models/product";
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
	<div class="middle-container">
		<main>
			<slot />	
		</main>
	</div>
	
	<footer>
		<p>Designed by Krycu</p>	
</footer>
	
</div>

<style>
	.navbar {
		position: sticky;
		top: 0;
		height: 7%;
	}
	.app {
		height: auto;
		min-height: 100vh;
		display: flex;
		flex-direction: column;	
		overflow-x: hidden;
	}
.middle-container
{
display: flex;
flex-direction: row;
}
	main {
		display: flex;
		flex-direction: row;
		padding: 1rem;
		width: 100%;
		min-height: 85vh;
		margin: 0;
		box-sizing: border-box;
	}

	footer {
		position: sticky;
		bottom: 0;
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
		height: 10%;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
