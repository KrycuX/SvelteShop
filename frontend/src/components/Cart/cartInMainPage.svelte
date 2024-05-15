<script lang="ts">
    import { fly } from 'svelte/transition';
    import type { Position } from "../../models/position";
    import ItemComponent from "./CartComponent/cartItem.svelte";

    export let items:Position[];
    export let visibility:boolean;
  
</script>

<div class="customClassNameBig {visibility?'cart':''}" >

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
        height: 100%;
        width: 25%;
        animation: slideRight 0.1s linear 0s 1 normal forwards;
   }
   .customClassNameBig.cart { 
    animation: slideLeft 0.1s linear 0s 1 normal forwards;
}

   @keyframes slideLeft{
    from{
    width:10%;
    opacity:0;
    visibility: hidden;
    }
    To{
    width:25%;
    opacity:1;
    visibility: visible;
    }
   }
   @keyframes slideRight{
    from{
    width:25%;
    opacity:1;
    visibility: visible;
    }
    To{
    width:10%;
    opacity:0;
    visibility: hidden;
    }
   }
    
    .itemsContainer{
        box-shadow: 0.1em 0.1em 0.1em 0.1em gray;

    }
   

</style>
