<script>
    import ItemComponent from "../ListItems/listItemList.svelte";

    export let items;
    export let onClick = (item) => {};
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
