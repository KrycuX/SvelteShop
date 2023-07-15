<script>
    import ItemComponent from "../ListItems/listItemBig.svelte";

    export let items;
    export let onClick = (item) => {};
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
