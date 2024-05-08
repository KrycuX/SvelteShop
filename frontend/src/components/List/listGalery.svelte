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
        display: grid;
        grid-template-columns: repeat(
            auto-fill,
            minmax(calc(100% * (1 / 3) - 1px), 33%)
        );
        flex-wrap: wrap;
        align-content: flex-start;
    }
</style>
