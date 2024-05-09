<script lang="ts">
	import Header from "../components/Navbar/navbar.svelte";
	import Cart from "../components/Cart/cartInMainPage.svelte"
	import "../assets/styles/style.css";
	import SidebarPanels from 'svelte-sidebar-panels'
    import { Position } from "../models/position";
	import type { Product } from "../models/product";
	let product:Product =
	{
	Id:1,
	Code: 'test',
	Name: "testname",
	Price: 12,
	Picture:"testpic"

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
		<Cart items = {position}/>	
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
		max-width: 80%;
		margin: 0 auto;
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
