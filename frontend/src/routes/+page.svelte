<script>
    import ItemComponent from "../components/ListItems/itemTypeOne.svelte";
    import ListViewTypes from "../components/ListViewTypes/listViewTypes.svelte";
    import items3 from "../json/item.json";
    import { confirm } from "../components/modals/modal.js";
    import { cart } from "../scripts/storable.js";

    export let data;
    let items6 = data.products;
    let value = "";
    let items2 = items3;
    let toggleView = 1;
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
    {items6}
    <!-- else if content here -->
    {#if toggleView == 1}
        <div class="customClassName">
            {#each items2 as item}
                <ItemComponent
                    value={item}
                    onClick={addToBasket}
                    type="itemGalery"
                />
            {/each}
        </div>
    {:else if toggleView == 2}
        <div class="customClassNameList">
            {#each items2 as item}
                <ItemComponent
                    value={item}
                    onClick={addToBasket}
                    type="itemList"
                />
            {/each}
        </div>
    {:else if toggleView == 3}
        <div class="customClassNameBig">
            {#each items2 as item}
                <ItemComponent
                    value={item}
                    onClick={addToBasket}
                    type="itemBig"
                />
            {/each}
        </div>
    {/if}
</section>

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
    .customClassNameList {
        flex: 1;
        display: grid;
        min-width: 100%;
        flex-wrap: wrap;
        align-content: flex-start;
    }
    .customClassNameBig {
        flex: 1;
        display: block;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
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
