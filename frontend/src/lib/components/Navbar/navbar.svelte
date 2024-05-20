<script>
    import { page } from "$app/stores";
</script>

<header>
    <nav>
        <ul>
            <li aria-current={$page.url.pathname === "/" ? "page" : undefined}>
                <a href="/">About me</a>
            </li>
            <li
                aria-current={$page.url.pathname === "/shopCart"
                    ? "page"
                    : undefined}
            >
                <a href="/shopCart">Skils</a>
            </li>
            <li aria-current={$page.url.pathname === "/" ? "page" : undefined}>
                <a
                    href="http://www.youtube.com"
                    target="_blank"
                    rel="noopener noreferrer">Koszyk <img src="/src/lib/assets/icons/koszyk.jpg" alt="" /></a
                >
               
            </li>
        </ul>
    </nav>
</header>

<style>
    nav {
        position: sticky;
        top: 0;
        margin-top: 0em;
        display: flex;
        justify-content: right;
        --background: var(--navbar-color);
    }
    svg {
        width: 2em;
        display: block;
    }
    path {
        fill: black;
    }
    ul {
        padding: 0;
        margin: 0;
        display: inline-block;
        align-items: center;
        list-style-type: none;
        overflow: hidden;
        padding-bottom: 0.1rem;
    }
    li {
        justify-content: center;
        align-items: center;
        display: inline-block;
        height: 100%;
    }
    nav a {
        min-height: 100%;
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
    }

    a:hover {
        color: var(--color-theme-1);
    }
    li:hover {
        box-shadow: 0.1em 0.1em 0.1em 0.1em gray;
    }
    img {
        width: 2em;
        height: 2em;
    }
</style>
