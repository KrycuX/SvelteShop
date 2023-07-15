<script>
    import ItemComponent from "../ListItems/listItemGalery.svelte";

    export let items;
    export let onClick = (item) => {};
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
