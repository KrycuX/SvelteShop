<script lang="ts">
    import type { Position } from "../../models/position";
    import type { Product } from "../../models/product";
    import ItemComponent from "./ListComponent/listItemBig.svelte";

    export let items:Product[];
    export let onClick = (item:Position) => {};
</script>

<div class="customClassNameBig">
    {#each items as item}
        <ItemComponent value={item} {onClick} />
    {/each}
</div>

<style>
    .customClassNameBig {
        flex: 1;
        display: block;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
</style>
