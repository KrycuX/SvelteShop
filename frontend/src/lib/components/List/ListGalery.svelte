<script lang="ts">
    import type { Product } from "$lib/types/types";
    import ItemComponent from "$lib/components/List/ListComponent/ListItemGalery.svelte";
    import type { ListType } from "$lib/enums/enums";

    export let items:Product[];
    export let viewType:ListType;
    export let handleDragStart=(item:Product):void => {}
    export let handleDragEnd=(item:Product):void => {}
</script>

<div class="list {viewType}">
    {#each items as item(item)}
        <ItemComponent 
        handleDragStart={handleDragStart} 
        handleDragEnd={handleDragEnd}
        value={item} 
        viewType={viewType} />
    {/each}
</div>

<style>
    .list{
        flex: 1;
        margin-top: 0.4em;
    }
    .list.Galery {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        flex-grow:1;
        column-gap: 1em;
        row-gap: 1em;

    }
    .list.SmallList{
        display: grid;
        min-width: 100%;
        height: 50%;
        flex-wrap: wrap;
        align-content: flex-start;
    }
    .list.BigItemList{
        display: block;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

</style>
