<script>
	import { cart } from "../../scripts/storable.js";
</script>

<section>
	<div>
		{#each $cart.position as item}
			<h1>nazwa: {item.item.name}</h1>
			<p>cena: {item.item.price} ilosc: {item.quantity}</p>
		{/each}
	</div>
</section>
