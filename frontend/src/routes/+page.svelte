<script lang="ts">
    import type {Product} from "$lib/types/types";
    import type { PageData } from "./$types";
    
    import ListViewTypes from "$lib/components/ListViewTypes/ListViewTypes.svelte";
    import ListGalery from "$lib/components/List/ListGalery.svelte";
    import CartComponent from "$lib/components/Cart/CartInMainPage.svelte"
    import SearchBar from "$lib/components/SearchBar/Searchbar.svelte"
    import { onMount } from 'svelte';
    import { Cart } from "$lib/models/cart";
    import { ListType } from "$lib/enums";
    import { Position } from "$lib/models/position";
    import { CartState } from "$lib/enums/enums";  

    export let data:PageData;

    let cart:Cart = new Cart();
    let position:Position[]= []
    let searchValue: string;
    let toggleView = ListType.Galery;
    let sideBar_show = CartState.Load;
    let droppedProduct:Product | undefined;
    let dropped_in:boolean;
    let searchbarVisible = true;

    cart.Positions.subscribe(items=>{position=items})

    $: itemsFiltered = data.products.items.filter(item =>
    {   if(searchValue === undefined || searchValue === '')
                return true;

        let itemName = item.Name.toLowerCase()
        return itemName.includes(searchValue.toLowerCase())
    }); 
    

    const handleScroll = () => {
        const searchbar = document.getElementById("menuBar");
        const searchbarHeight = searchbar ? searchbar.offsetTop : 0;
         searchbarVisible = window.scrollY <= searchbarHeight ;
    };

    onMount(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });


    function deletePosition(id:Number){
        cart.RemoveProductFromCart(id);
    }

    function updateCount(id:Number,count:number){
        cart.UpdatePosition(id,count);
    }

    function handleDragEnd(e) {
    	if (dropped_in == false) {
          /*droppedProduct = e;*/
    	}
      dropped_in = false;
    }

    function handleDragStart(item:Product){
        droppedProduct = item;
    }

     function handleDragDrop(e:DragEvent) {
        if(droppedProduct !== undefined){
            cart.AddProductToCart(new Position(1,droppedProduct));      
        }
        droppedProduct = undefined; 
    } 

</script>
<section > 
    <div class="content {sideBar_show.toString()}">
        <div id = "menuBar" class="menuBar {searchbarVisible?'':'scrolled'}">
            <SearchBar searchValue = {searchValue} products={data.products.items}/>
            <ListViewTypes bind:value={toggleView} />
        </div> 
            <ListGalery handleDragStart={handleDragStart} 
            handleDragEnd={handleDragEnd}
            items={itemsFiltered} 
            viewType={toggleView}
            />     
    </div>
    <CartComponent 
    handleDragDrop={handleDragDrop} 
    items = {position}  
    bind:visibility={sideBar_show} 
    deletePosition={deletePosition} 
    updateCount ={updateCount}/>	
</section>
<style>
   section{   
    display: flex;
   }
   .content{   
    width: 100%; 
    padding: 1rem;

   }  
 .content.Hide{
    animation: slideRight 0.1s linear 0s 1 normal forwards;
   }
   .content.Show{
   animation: slideLeft 0.1s linear 0s 1 normal forwards;
   }
    @keyframes slideRight{ 
    from
    {
    padding-right:20%;
    }
    to
    {       
    padding-right:0%;
    }
   } 
   @keyframes slideLeft{
    from{
    padding-right:0%;
    }
    to{
    padding-right:20%;
    }
   }
  
    .menuBar{  
        width: 100%; 
        display:inline-flex;
        flex-flow: row wrap;
        column-gap: 5%; 
        animation: SearchReverte 0.3s ease-in 0s 1 normal forwards;     
    }
    .menuBar.scrolled{
        margin-top:0.1%;
        position: fixed;
        top:0;
        animation: SearchScrolled 0.3s linear 0s 1 normal forwards;    
    }

    @keyframes SearchScrolled{ 
    from
    {   top:1;
        width:100%;
    }
    to
    {   top:0;    
        width:75%;
    }
   } 

   @keyframes SearchReverte{
    from{
        top:0;
        width:75%;
    }
    to{
        top:1;
        width:100%;
    }
   }
</style>
