<script>
    import { page } from "$app/stores";
</script>

<header>
    <nav>
        <svg viewBox="0 0 2 3" aria-hidden="true">
            <path d="M0,0 L0.5,1 L1,2 C1,2 1.5,3 2,3 L2,0 Z" />
        </svg>
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
                    rel="noopener noreferrer">Koszyk</a
                >
                <img src="/src/icons/koszyk.jpg" alt="" />
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
        align-items: center;
        --background: var(--navbar-color);
    }
    svg {
        width: 2em;
        height: 3em;
        display: block;
    }
    path {
        fill: var(--background);
    }
    ul {
        position: relative;
        padding: 0;
        margin: 0;
        height: 3em;
        background: var(--background);
        align-items: center;
        list-style: none;
        background-size: contain;
        justify-content: center;
        display: flex;
    }
    li {
        position: relative;
        justify-content: center;
        align-items: center;
        display: flex;
        height: 100%;
    }
    nav a {
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
