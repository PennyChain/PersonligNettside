<script>
    export const prerender = true;
    /** @type {import('./$types').LayoutData} */

    import "../app.css"

    import { page } from '$app/stores';
    
</script>

<meta name="viewport" content="width=device-width, initial-scale=1.0">

<h1 id="MainHeader">LIAM RIBE</h1>

<nav class="navbar1">
    <a href="/" class="{ $page.url.pathname === '/' ? 'active' : '' }">OM MEG</a>
    <a href="/CV" class="{ $page.url.pathname === '/CV' ? 'active' : '' }">CV</a>
    <a href="/PROSJEKTER" class="{ $page.url.pathname === '/TJENESTER' ? 'active' : '' }">PROSJEKTER</a>
    <a href="/LINKEDIN" class="{ $page.url.pathname === '/LINKEDIN' ? 'active' : '' }">LINKEDIN</a>
    <a href="/KONTAKT" class="{ $page.url.pathname === '/KONTAKT' ? 'active' : '' }">KONTAKT</a>
    <a href="/LEETCODE" class="{ $page.url.pathname === '/LEETCODE' ? 'active' : '' }">LEETCODE</a>
</nav>


<!-- FUNKER IKKE

<footer id="GlobalFooter">
    <h2 class="footer1">Liam Ribe</h2>
    <p class="footer1">&copy;2024</p>
</footer>

-->

<slot></slot>

<style>
    #MainHeader {
        text-align: center;
        font-family: 'Bodoni Moda', serif;
        font-weight: 500;
    }

    .navbar1 {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgb(255, 255, 255);
        width: 100%;
        height: 40px;
        font-size: 20px;
        font-weight: 400;
        font-family: 'Bodoni Moda', serif;
        box-shadow: 0px 10px 5px 3px rgb(255, 255, 255);
        padding-top: 5px;
        margin-bottom: 50px;
        gap: 3%;
    }

    .navbar1 a.active {
        text-decoration: underline;
        text-underline-offset: 6px;
    }

    a:link, a:visited {
        text-decoration: none;
        color: rgb(86, 86, 86);
    }

    a:active, a:hover {
        text-decoration: underline;
        text-underline-offset: 6px;
    }

    a:hover {
        color: rgb(0, 0, 0);
        font-size: 105%;
    }

    /* Responsiv for mellomstore skjermer (nettbrett) */
    @media (max-width: 768px) {
        .navbar1 {
            font-size: 18px;
            gap: 2%;
            margin-bottom: 40px;
        }

        #MainHeader {
            font-size: 28px;
        }
    }

    /* Responsiv for små skjermer (mobil) */
    @media (max-width: 480px) {
        #MainHeader {
            font-size: 24px;
        }

        .navbar1 {
            flex-direction: column; /* Gjør navigasjonslenker vertikale */
            font-size: 16px;
            height: auto;
            gap: 10px;
            padding-bottom: 10px;
        }

        .navbar1 a {
            padding: 10px 0;
            width: 100%;
            text-align: center;
        }

        /* Endre hover-effekt for bedre lesbarhet på mobil */
        a:hover {
            font-size: 100%;
            color: rgb(50, 50, 50);
        }
    }
</style>

