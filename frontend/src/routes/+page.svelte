<script>
    import ListViewTypes from "../components/ListViewTypes/listViewTypes.svelte";
    import ListBigItems from "../components/List/listBigItems.svelte";
    import ListGalery from "../components/List/listGalery.svelte";
    import ListSmalList from "../components/List/listSmalList.svelte";
    import items3 from "../json/item.json";
    import { confirm } from "../components/modals/modal.js";
    import { cart } from "../scripts/storable.js";
    import { ListType } from "../enums";
    export let data;
    let items6 = data.products;
    let value = "";
    let items2 = items3;
    let toggleView = ListType.Galery;
    /**
     * @param {string | RegExp} value
     */
    async function search(value) {
        let re = new RegExp(value, "g");
        items2 = items3.filter((item) => item.name.match(re));
    }
    /**
     @type {import('../json/item.json')}
     */
    let basket = [];

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
        <ListGalery items={items6.products} onClick={addToBasket} />
    {:else if toggleView == ListType.SmallList}
        <ListSmalList items={items6.products} onClick={addToBasket} />
    {:else if toggleView == ListType.BigItemList}
        <ListBigItems items={items6.products} onClick={addToBasket} />
    {/if}
</section>

<style>
    .searchBar {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 2em;
        font-size: 1.2rem;
        width: 100%;
        border-radius: 0.5em;
    }
</style>
