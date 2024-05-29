<script lang="ts">
    import { CartState } from "$lib/enums/enums";
    import type { Position } from "$lib/models/position";
    import ItemComponent from "$lib/components/Cart/CartComponent/CartItem.svelte";

    export let items:Position[];
    export let visibility:CartState = CartState.Load;
    export let handleDragDrop=(e):void =>{};
    export let drop_zone:HTMLElement;
    export let deletePosition = (id:Number) => {}
    
    function onKeyDown(e){
        switch(e.keyCode) {
			 case 75:         
             changeVisibility();
             break;
		 }
         console.log(e.keyCode);
    }
    function changeVisibility(){
        if(visibility === CartState.Hide || visibility === CartState.Load)
        visibility = CartState.Show;
        else
        visibility = CartState.Hide;
    }
    </script>

<div class="customClassNameBig {visibility.toString()}">
    <div   
    tabindex="0"
    role="button"
    class="flyingButton" 
    on:click= {changeVisibility} 
    on:keydown = {onKeyDown}>
<span>t</span>
   </div>
   <div class="wrapper ">
    <div 
    tabindex="0"
    role="button"
    class="itemsContainer"
    on:drop={(e)=>{e.preventDefault();handleDragDrop(e)}}
    ondragover="return false" 
    bind:this={drop_zone}>
    {#each items as item}
        <ItemComponent value={item} deletePosition = {deletePosition} />
    {/each} 
   </div>
   <div class="summary">
    <p>Items count {items.length}</p>
   </div>
    </div>
</div>
<style>
    .customClassNameBig {
        position: fixed;
        display: flex;
        right: 0;
        margin-top: 1%;
        height: 85%;
        width: 1%;
        max-width: 20%;

   }
   
   .customClassNameBig.Hide { 
    animation: slideRight 0.1s linear 0s 1 normal forwards;
}
   .customClassNameBig.Show { 
 animation: slideLeft 0.1s linear 0s 1 normal forwards;
}
.flyingButton{
        position:relative;
        right: 0;  
        display: flex;
        align-items: center;
        min-width: 1rem;
        background-color: aliceblue;
        border-top-left-radius: 60%;
        border-bottom-left-radius: 60%;
   }
   .flyingButton>span{
    position:relative;
    rotate: -90deg;
   }

   @keyframes slideLeft{
    from{
    width:1%;
    }
    to{
    width:20%;
    }
   }
   @keyframes slideRight{
    from{
    width:20%;
    }
    to{
    width:1%;
    }
   }
    
    .itemsContainer{  
        width: 100%;
        height: 93%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        flex-grow:1;
        align-content: flex-start;
        overflow: auto;
    }
    .summary{
        position: sticky;
        background-color: aliceblue;
        bottom: 0;
    }
    .wrapper{
        width: 100%;
        height: 100%;
        background-color: aliceblue;
        box-shadow: 0.1em 0.1em 0.1em 0.1em gray;
        overflow: auto;
    }

</style>
