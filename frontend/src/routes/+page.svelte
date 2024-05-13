<script lang="ts">
    import ListViewTypes from "../components/ListViewTypes/listViewTypes.svelte";
    import ListBigItems from "../components/List/listBigItems.svelte";
    import ListGalery from "../components/List/listGalery.svelte";
    import ListSmalList from "../components/List/listSmalList.svelte";
    import { fly, type FlyParams } from 'svelte/transition';
    import { confirm } from "../components/modals/modal.js";
    import type { Cart } from "../models/cart";
    import CartComponent from "../components/Cart/cartInMainPage.svelte"
    import { ListType } from "../enums";
    import { Position } from "../models/position";
    import type {Product} from "../models/product";

    export let data;

    let cart : Cart;
    let product:Product =
	{
	Id:1,
	Code: 'test',
	Name: "testname",
	Price: 12,
	Picture:"https://candyweb.pl/wp-content/uploads/2020/02/google-grafika.png"

	};
    let position:Position[]= [new Position(1,product)]
    //let allItems = data.products;
    let allItems = [product,product,product,product,product,product,product,product,product,product,product];
    let itemsFiltered = [...allItems]; // kopiowanie listy
    let value = "";
    let toggleView = ListType.Galery;
    let sideBar_show = false;
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
  
    <div class="content {sideBar_show?'cart':''}">
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
    </div>

    <div class="flyingButton" on:click={()=>{sideBar_show =!sideBar_show;}} >
        test
   </div>
   {#if sideBar_show === true}
    <CartComponent items = {position} visibility={sideBar_show} />	
   {/if}
</section>

<style>
 :root{
    --content-width:100%
 }
   section{   
    display: flex;
   }
   .content{   
    --animTime:0.0s;
    width: 100%; 
    animation: slideRight 0.1s linear 0s 1 normal forwards;
   }  

   .content.cart{
    animation: slideLeft 0.1s linear 0s 1 normal forwards;

   }
    @keyframes slideRight{ 
    from
    {
    width:75%;
    }
    To
    {       
    width:100%;
    }
   } 

   @keyframes slideLeft{
    from{
      width:100%;
    }
    To{
        width:75%;

    }
   }
  
   .flyingButton{
        position: relative;
        display: flex;   
        right: 0;
        top:50;
        background-color: aliceblue;
        text-align: center;
   }
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
