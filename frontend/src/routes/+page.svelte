<script>
    import ListViewTypes from "../components/ListViewTypes/listViewTypes.svelte";
    import ListBigItems from "../components/List/listBigItems.svelte";
    import ListGalery from "../components/List/listGalery.svelte";
    import ListSmalList from "../components/List/listSmalList.svelte";
    import { confirm } from "../components/modals/modal.js";
    import { cart } from "../scripts/storable.js";
    import { ListType } from "../enums";

    export let data;

    let allItems = data.products;
    let itemsFiltered = [...allItems?.products]; // kopiowanie listy

    let value = "";

    let toggleView = ListType.Galery;
    /**
     * @param {string | RegExp} value
     */
    async function search(value) {
        let re = new RegExp(value, "gi");

        itemsFiltered = allItems?.products.filter((item) =>
            item.title.match(re)
        );
    }

    /**
     * @param {{ name: string; id: number; price: string; }[]} itemForBasket
     */
    async function addToBasket(itemForBasket) {
        const confirmed = await confirm({
            title: "Confirmation",
            message: "You sure?",
        });
        if (confirmed) {
            cart.addItem(itemForBasket);
        }
    }
</script>

<section>
    <input
        class="searchBar"
        type="text"
        placeholder="Search for items..."
        bind:value
        on:input={() => search(value)}
    />
    <ListViewTypes bind:value={toggleView} />

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
        flex: 1;
        position: fixed;
        top: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 2em;
        font-size: 1.2rem;
        width: 50%;
        border-radius: 0.5em;
    }
</style>
