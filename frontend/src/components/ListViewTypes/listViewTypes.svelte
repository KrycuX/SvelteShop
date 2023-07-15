<script>
    export let value;
</script>

<ul>
    <li>
        <div
            on:click={() => {
                value = 1;
            }}
        >
            1
        </div>
    </li>
    <li>
        <div
            on:click={() => {
                value = 2;
            }}
        >
            2
        </div>
    </li>
    <li>
        <div
            on:click={() => {
                value = 3;
            }}
        >
            3
        </div>
    </li>
</ul>

<style>
    nav {
        position: relative;
        top: 0;
        margin-top: 0em;
        display: flex;
        justify-content: right;
        align-items: center;
        --background: var(--navbar-color);
    }
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
    ul div {
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
    }
    ul div:focus {
        box-shadow: 0.1em 0.1em 0.1em 0.1em gray;
    }
    li:hover {
        box-shadow: 0.1em 0.1em 0.1em 0.1em gray;
    }
</style>
