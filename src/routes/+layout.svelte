<script>
    export const prerender = true;
    /** @type {import('./$types').LayoutData} */
    export let data;

    import "../app.css"

    import { page } from '$app/stores';

</script>

<meta name="viewport" content="width=device-width, initial-scale=1.0">

<h1 id="MainHeader">Liam Ribe</h1>

<nav class="navbar1">
    <a href="/" class="{ $page.url.pathname === '/' ? 'active' : '' }">HJEM</a>
    <a href="/CV" class="{ $page.url.pathname === '/CV' ? 'active' : '' }">CV</a>
    <a href="/OM MEG" class="{ $page.url.pathname === '/OM%20MEG' ? 'active' : '' }">OM MEG</a>
    <a href="/KONTAKT" class="{ $page.url.pathname === '/KONTAKT' ? 'active' : '' }">KONTAKT</a>
    <a href="/TJENESTER" class="{ $page.url.pathname === '/TJENESTER' ? 'active' : '' }">TJENESTER</a>
    <a href="/LINKEDIN" class="{ $page.url.pathname === '/LINKEDIN' ? 'active' : '' }">LINKEDIN</a>
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

</style>

