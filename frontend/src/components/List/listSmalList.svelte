<script lang="ts">
    import type { Position } from "../../models/position";
    import type { Product } from "../../models/product";
    import ItemComponent from "./ListComponent/listItemList.svelte";

    export let items:Product[];
    export let onClick = (item:Position) => {};
</script>

<div class="customClassNameList">
    {#each items as item}
        <ItemComponent value={item} {onClick} />
    {/each}
</div>

<style>
    .customClassNameList {
        flex: 1;
        display: grid;
        min-width: 100%;
        flex-wrap: wrap;
        align-content: flex-start;
    }
</style>
