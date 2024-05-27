<script lang="ts">
import type { Product } from '$lib/types/types';
import { slide } from 'svelte/transition';
import { quintOut,quintIn } from 'svelte/easing';
export let onClick=(inputValue:string):void =>{};
export let searchValue:string;
export let products:Product[];
$: filtered = products.filter(item =>
            {   if(searchValue === undefined || searchValue === '')
                        return true;
                let itemName = item.Name.toLowerCase()
                return itemName.includes(searchValue.toLowerCase())
            })
</script>

<div class="list" 
in:slide={{ delay: 20, duration: 300, easing: quintOut, axis: 'y' }} 
out:slide={{delay: 20, duration: 300, easing: quintIn, axis: 'y'}}>
    {#if filtered !== undefined && filtered.length > 0}
        {#each filtered as product}
        <div class="item"
        tabindex="0"
        role="button"
        in:slide={{ delay: 20, duration: 300, easing: quintOut, axis: 'y' }}
        out:slide={{delay: 0, duration: 100, easing: quintIn, axis: 'y'}}
        on:click={()=>{onClick(product.Name)}}
        on:keydown={(e)=>{}}
        >
        {product.Name}</div>
        {/each}
        {:else}
        <div lass="item"
        in:slide={{ delay: 20, duration: 300, easing: quintOut, axis: 'y' }}
        out:slide={{delay: 0, duration: 100, easing: quintIn, axis: 'y'}}>
        Brak produktów</div>
    {/if}

</div>

<style>
.item{
    padding: 0.5%;
}
    .list{
        position: absolute;
        background-color: white;
        margin: 0; 
        padding:0;
        display: inline-block;
        top: 100%;
        left: 0;
        right: 0;
        border: 10px;
        list-style-type: none;
        border-radius: 0 0 10px 10px;
    }
    .item:hover{
        background-color: lightgray;
    }
</style>