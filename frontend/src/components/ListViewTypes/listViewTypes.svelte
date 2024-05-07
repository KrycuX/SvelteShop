<script>
    export let value;
    let class0 = "active";
    let class1 = "";
    let class2 = "";
</script>

<div>
    <ul>
        <li class={class0}>
            <button
                on:click={() => {
                    value = 1;
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
                    value = 2;
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
                    value = 3;
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
        position: relative;
        padding: 0;
        margin: 0;
        height: 3em;
        background: var(--background);
        align-items: left;
        list-style: none;
        background-size: contain;
        justify-content: left;
        display: flex;
    }
    li {
        position: relative;
        justify-content: center;
        align-items: center;
        display: flex;
        height: 100%;
    }
    ul button {
        display: flex;
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
