<script lang="ts">
    import { ListType } from "../../enums/enums";
    export let value:ListType;
    let class0 = "active";
    let class1 = "";
    let class2 = "";
</script>

<div>
    <ul>
        <li class={class0}>
            <button
                on:click={() => {
                    value = ListType.Galery;
                    class0 = "active";
                    class1 = "";
                    class2 = "";
                }}
            >
                1
            </button>
        </li>
        <li class={class1}>
            <button
                on:click={() => {
                    value = ListType.SmallList;
                    class0 = "";
                    class1 = "active";
                    class2 = "";
                }}
            >
                2
            </button>
        </li>
        <li class={class2}>
            <button
                on:click={() => {
                    value = ListType.BigItemList;
                    class0 = "";
                    class1 = "";
                    class2 = "active";
                }}
            >
                3
            </button>
        </li>
    </ul>
</div>

<style>
 
    ul {
        padding: 0;
        margin: 0;
        display: inline-block;
        align-items: center;
        list-style-type: none;
        overflow: hidden;
        padding: 0.1rem;
        height: 100%;
    }
    li {
        align-items: center;
        display: inline-block;
        height: 100%;
    }
    ul button {
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
    .active,
    li:hover {
        box-shadow: 0.1em 0.1em 0.1em 0.1em gray;
    }
</style>
