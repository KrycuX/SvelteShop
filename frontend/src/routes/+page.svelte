<script lang="ts">
    import ListViewTypes from "../components/ListViewTypes/listViewTypes.svelte";
    import ListBigItems from "../components/List/listBigItems.svelte";
    import ListGalery from "../components/List/listGalery.svelte";
    import ListSmalList from "../components/List/listSmalList.svelte";
    import { confirm } from "../components/modals/modal.js";
    import type { Cart } from "../models/cart";
    import { ListType } from "../enums";
    import type { Position } from "../models/position";

    export let data;
    let cart : Cart;
    let allItems = data.products;
    let itemsFiltered = [...allItems]; // kopiowanie listy
    let value = "";
    let toggleView = ListType.Galery;

    async function search(value: string) {
        let re = new RegExp(value, "gi");

        itemsFiltered = allItems?.filter((item) =>
            item.Name.match(re)
        );
    }
    async function addToBasket(itemForBasket:Position) {
        const confirmed = await confirm({
            title: "Confirmation",
            message: "You sure?",
        });
        if (confirmed) {
            cart.AddProductToCart(itemForBasket);
        }
    }
</script>

<section>
    <div class="menuBar">
        <input
        class="searchBar"
        type="text"
        placeholder="Search for items..."
        bind:value
        on:input={() => search(value)}
    />
    <ListViewTypes bind:value={toggleView} />
    </div>
    

    <!-- else if content here -->
    {#if toggleView == ListType.Galery}
        <ListGalery items={itemsFiltered} onClick={addToBasket} />
    {:else if toggleView == ListType.SmallList}
        <ListSmalList items={itemsFiltered} onClick={addToBasket} />
    {:else if toggleView == ListType.BigItemList}
        <ListBigItems items={itemsFiltered} onClick={addToBasket} />
    {/if}
</section>

<style>
    .searchBar {
        min-height: 2em;
        font-size: 1.2rem;
        width: 75%;
        border-radius: 0.5em;
    }
    .menuBar{  
        width: 100%; 
        position: relative;
        display:flex;
        flex-flow: row wrap;
        column-gap: 5%;
        
    }
</style>
