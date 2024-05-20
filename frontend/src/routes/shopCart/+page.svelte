<script lang="ts">
  import { Cart } from "$lib/models/cart";
  import type { Position } from "$lib/models/position";

let cart:Cart = new Cart();
cart.Positions.subscribe(items=>{position=items})
let position:Position[]
</script>

<section>
	<div>
		{#each position as item}
			<h1>nazwa: {item.Product.Name}</h1>
			<p>cena: {item.TotalValue} ilosc: {item.Count}</p>
		{/each}
	</div>
</section>
