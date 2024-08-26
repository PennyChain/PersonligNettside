<script>
    /** @type {import('./$types').LayoutData} */
    export let data;

    import "../app.css"
</script>

<meta name="viewport" content="width=device-width, initial-scale=1.0">

<h1 id="MainHeader">Liam Ribe</h1>

<nav class="navbar1">
    <a data-sveltekit-reload href="/">HJEM</a>
    <a data-sveltekit-reload href="/CV">CV</a>
    <a data-sveltekit-reload href="/OM MEG">OM MEG</a>
    <a data-sveltekit-reload href="/KONTAKT">KONTAKT</a>
    <a data-sveltekit-reload href="/TJENESTER">TJENESTER</a>
    <a data-sveltekit-reload href="/LINKEDIN">LINKEDIN</a>
    <a data-sveltekit-reload href="/LEETCODE">LEETCODE</a>
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

    a:link, a:visited {
        text-decoration: none;
        color: rgb(86, 86, 86);
    }

    a:active {
        text-decoration: underline;
    }

    a:hover {
        color: rgb(0, 0, 0);
        font-size: 110%;
    }

</style>

