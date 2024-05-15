<script lang="ts">
    import type { Position } from "../../models/position";
    import ItemComponent from "./CartComponent/cartItem.svelte";

    export let items:Position[];
    export let visibility:boolean = false;
    </script>

<div class="customClassNameBig {visibility?'cart':''}" >
    <div class="flyingButton" on:click={()=>{visibility =!visibility;}} >
        test
   </div>
    <div class="itemsContainer">
        {#each items as item}
            <ItemComponent value={item}  />
        {/each}
    </div>
</div>
<style>
    .customClassNameBig {
        position: fixed;
        display: flex;
    
        right: 0;
        height: 85vh;
        width:20%;
        animation: slideRight 0.1s linear 0s 1 normal forwards;
   }
   .customClassNameBig.cart { 
 animation: slideLeft 0.1s linear 0s 1 normal forwards;
}
.flyingButton{
        position:relative;  
        right: 0;
        top:50;
        background-color: aliceblue;

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
        box-shadow: 0.1em 0.1em 0.1em 0.1em gray;

    }

</style>
