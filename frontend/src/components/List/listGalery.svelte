<script lang="ts">
    import type { Position } from "../../models/position";
    import type { Product } from "../../models/product";
    import ItemComponent from "./ListComponent/listItemGalery.svelte";

    export let items:Product[];
    export let onClick = (item:Position) => {};
</script>

<div class="customClassName">
    {#each items as item}
        <ItemComponent value={item} {onClick} />
    {/each}
</div>

<style>
    .customClassName {
        flex: 1;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        flex-grow:1;
    }
</style>
