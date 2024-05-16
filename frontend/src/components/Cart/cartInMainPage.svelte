<script lang="ts">
    import { CartState } from "../../enums/enums";
    import type { Position } from "../../models/position";
    

    import ItemComponent from "./CartComponent/cartItem.svelte";

    export let items:Position[];
    export let visibility:CartState = CartState.Load;
    export let handleDragDrop=(e):void =>{};
    export let drop_zone:HTMLElement;

    </script>

<div class="customClassNameBig {visibility.toString()}">
    <div class="flyingButton" on:click={()=>{
        if(visibility === CartState.Hide || visibility === CartState.Load)
        visibility = CartState.Show;
        else
        visibility = CartState.Hide;
        
        }} >
<span>t</span>
   </div>
    <div class="itemsContainer"
        on:drop={handleDragDrop}
        ondragover="return false" 
        bind:this={drop_zone}>
        {#each items as item}
            <ItemComponent value={item}  />
        {/each}
    </div>
</div>
<style>
    .customClassNameBig {
        position: fixed;
        display: flex;
        margin-bottom: 2rem;
        right: 0;
        height: 85vh;
        width:1%;

   }.customClassNameBig.Hide { 
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
    To{
    width:20%;
    }
   }
   @keyframes slideRight{
    from{
    width:20%;
    }
    To{
    width:1%;
    }
   }
    
    .itemsContainer{  
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        flex-grow:1;
        background-color: aliceblue;
        box-shadow: 0.1em 0.1em 0.1em 0.1em gray;
    }

</style>
