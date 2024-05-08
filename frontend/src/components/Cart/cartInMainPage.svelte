<script lang="ts">
    import type { Position } from "../../models/position";
    import ItemComponent from "./CartComponent/cartItem.svelte";

    export let items:Position[];
</script>

<div class="customClassNameBig">
    {#each items as item}
        <ItemComponent value={item} />
    {/each}
</div>

<style>
    .customClassNameBig {
        box-shadow: 0.1em 0.1em 0.1em 0.1em gray;
        position: sticky;
        right: 0;
        height: 80%;
    }
</style>
