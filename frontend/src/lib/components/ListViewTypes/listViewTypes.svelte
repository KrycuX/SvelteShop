<script lang="ts">
    import { ListType } from "$lib/enums/enums";
    export let value:ListType;

    let class0 = "active";
    let class1 = "";
    let class2 = "";

</script>
<div class="list">
        <div 
        tabindex="0"
        role="button"
        class="listItem {value === ListType.Galery? 'hover': ''}"
        on:click={() => { value = ListType.Galery;}}
        on:keydown={()=>{}}> 1 </div>
        <div 
        tabindex="0"
        role="button"
        class="listItem {value === ListType.SmallList? 'hover': ''}"
        on:click={() => { value = ListType.SmallList; }}
        on:keydown={()=>{}}> 2 </div>
        <div 
        tabindex="0"
        role="button"
        class="listItem {value === ListType.BigItemList? 'hover': ''}"
        on:click={() => {value = ListType.BigItemList;}}
        on:keydown={()=>{}}> 3 </div>
</div>

<style>
 
 .list {
        margin: 0;
        display: inline-block;
        align-items: center;
        overflow: hidden;
        padding: 0.1rem;
    }
    .listItem {
        align-items: center;
        display: inline-flex;
        height: 100%;
        align-items: center;
        padding: 0 2rem;
        color: white;
        font-weight: 700;
        font-size: 0.8rem;
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        transition: color 0.2s linear;
        background-color: transparent;
        border: 0;
        outline: 0;
    }
    div:focus {
        box-shadow: 0.1em 0.1em 0.1em 0.1em gray;
    }
    .listItem.hover,
    .listItem:hover {
        box-shadow: 0.1em 0.1em 0.1em 0.1em gray;
    }
</style>
