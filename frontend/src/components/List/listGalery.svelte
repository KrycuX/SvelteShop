<script lang="ts">
    import type { Position } from "../../models/position";
    import type { Product } from "../../models/product";
    import ItemComponent from "./ListComponent/listItemGalery.svelte";

    export let items:Product[];
    export let onClick = (item:Position) => {};
    export let handleDragStart=(item:Product):void => {}
    export let handleDragEnd=(item:Product):void => {}
    export let handleTouchStart=(item:Product):void => {}
    export let handleTouchMove=(item:Product):void => {}
    export let handleTouchEnd=(item:Product):void => {}
</script>

<div class="customClassName">
    {#each items as item}
        <ItemComponent 
        handleDragStart={handleDragStart} 
        handleDragEnd={handleDragEnd}
        handleTouchStart={handleTouchStart}
        handleTouchMove={handleTouchMove}
        handleTouchEnd={handleTouchEnd}
        value={item} {onClick} />
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
