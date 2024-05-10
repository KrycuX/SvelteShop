<script lang="ts">
    import { fly, fade } from 'svelte/transition';
    import type { Position } from "../../models/position";
    import ItemComponent from "./CartComponent/cartItem.svelte";

    export let items:Position[];
    let sideBar_show = false;
    let button:Element;
  
</script>
<div class="customClassNameBig" >
    {#if !sideBar_show}
    <button bind:this={button} on:click={()=>{sideBar_show =!sideBar_show;
    }} 
        class="temp" in:fade={{delay:410, duration: 0} } >
       t
   </button>
   {/if}
    {#if sideBar_show}
    <button bind:this={button} on:click={()=>{sideBar_show =!sideBar_show;
    }} 
        class="temp2" transition:fly={{x: 250,opacity:1}}>
       t
   </button>
    <div class="itemsContainer" transition:fly={{x: 250, opacity: 1}}>
        {#each items as item}
            <ItemComponent value={item}  />
        {/each}
    </div>
    {/if}
</div>

<style>
    .temp{
        top:50%;
        position: absolute;
        right: 0;
        width: 2vh;
        height: 2%;
        
    }
    .temp2{
        top:50%;
        float:left;
        position: relative;
        width: 2vh;
        height: 2%;
        
    }
    .customClassNameBig {
        position: relative;
        display: flex;
        right: 0;
        height: 100%;
        width: 10%;
    }
    .itemsContainer{
        box-shadow: 0.1em 0.1em 0.1em 0.1em gray;

    }
   

</style>
