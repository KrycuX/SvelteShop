<script lang="ts">
  import type { Product } from "$lib/types/types";
  import HintList from "./HintList/HintList.svelte";

export let searchValue:string;
export let products:Product[];
let focused:boolean = false;

function onClick(inputValue:string)
{
    console.log(inputValue);
if(inputValue !== undefined)
    searchValue = inputValue

}

</script>
<div class = "wrapper">
        <input
        class="searchBar"
        type="text"
        placeholder="Search for items..."
        bind:value={searchValue}
        on:input
        on:focus={(e)=>{focused = !focused }  }
        on:focusout= {(e)=>focused = !focused}
        />
        {#if searchValue !== undefined && searchValue !== "" && focused}
        <HintList searchValue={searchValue} products={products} onClick={onClick} />
        {/if}
</div>
<style>
    .wrapper{
        width: 75%;
        position: relative;
    }
     .searchBar {
        min-height: 2em;
        margin: 0;
        padding-right:0;
        padding-left:0;
        font-size: 1.2rem;
        border: 0;
        width: 100%;
    }
  
</style>