<script lang="ts">
    import type { Position } from "../../models/position";
    import type { Product } from "../../models/product";
    import ItemComponent from "./ListComponent/ListItemGalery.svelte";
    import type { ListType } from "../../enums";

    export let items:Product[];
    export let viewType:ListType;
    export let onClick = (item:Position) => {};
    export let handleDragStart=(item:Product):void => {}
    export let handleDragEnd=(item:Product):void => {}
    export let handleTouchStart=(item:Product):void => {}
    export let handleTouchMove=(item:Product):void => {}
    export let handleTouchEnd=(item:Product):void => {}

</script>

<div class="list {viewType}">
    {#each items as item(item)}
        <ItemComponent 
        handleDragStart={handleDragStart} 
        handleDragEnd={handleDragEnd}
        handleTouchStart={handleTouchStart}
        handleTouchMove={handleTouchMove}
        handleTouchEnd={handleTouchEnd}
        value={item} {onClick}
        viewType={viewType} />
    {/each}
</div>

<style>
    .list.Galery {
        flex: 1;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        flex-grow:1;
    }
    .list.SmallList{
        flex: 1;
        display: grid;
        min-width: 100%;
        height: 50%;
        flex-wrap: wrap;
        align-content: flex-start;
    }
    .list.BigItemList{
        flex: 1;
        display: block;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

</style>
