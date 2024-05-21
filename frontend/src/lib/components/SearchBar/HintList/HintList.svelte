<script lang="ts">
import type { Product } from '$lib/types/types';
import { slide } from 'svelte/transition';
import { quintOut,quintIn } from 'svelte/easing';
export let onClick=async (inputValue:string):Promise<undefined> =>{};
export let searchValue:string;
export let products:Product[];
$: filtered = products.filter(item =>
            {   if(searchValue === undefined || searchValue === '')
                        return true;
                let itemName = item.Name.toLowerCase()
                return itemName.includes(searchValue.toLowerCase())
            })
</script>

<ul class="list" 
in:slide={{ delay: 20, duration: 300, easing: quintOut, axis: 'y' }} 
out:slide={{delay: 20, duration: 300, easing: quintIn, axis: 'y'}}>

    {#if filtered !== undefined && filtered.length > 0}
        {#each filtered as product}

        <li 
        in:slide={{ delay: 20, duration: 300, easing: quintOut, axis: 'y' }}
        out:slide={{delay: 0, duration: 100, easing: quintIn, axis: 'y'}}
        on:click={()=>{onClick(product.Name)}}
         >{product.Name}</li>
        {/each}
        {:else}
        <li 
        in:slide={{ delay: 20, duration: 300, easing: quintOut, axis: 'y' }}
        out:slide={{delay: 0, duration: 100, easing: quintIn, axis: 'y'}}>
        Brak produktów</li>
    {/if}

</ul>

<style>
li{
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
    li:hover{
        background-color: lightgray;
    }
</style>