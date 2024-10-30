<script>

</script>

<div class="biggerbox">
    <div class="bigbox">
        <div class="tekstboks">
            <h1 id="CvHeader">Om Meg</h1>
            <p>
                Commodo sint magna occaecat ad. Eu anim qui incididunt aliquip irure ipsum et consectetur nostrud incididunt eu. Sunt quis ut elit non.
                Occaecat ut ad eiusmod voluptate reprehenderit eu aliqua excepteur nulla non culpa cillum qui. Ipsum id aute aliquip mollit in est reprehenderit consequat proident reprehenderit. Magna laborum ea ipsum laboris ea minim reprehenderit laborum veniam labore anim elit cillum. Amet pariatur aute ut et ullamco. Elit ad tempor consequat velit cupidatat voluptate magna ullamco id voluptate aliqua nulla labore. Nulla non sit ipsum amet in et sunt velit veniam.
            </p>
        </div>
        <div class="bilder">
            <img id="cvbilde" src="/Bilder/IMG_4352.jpg" alt="bilde">
        </div>
    </div>
</div>

<style>
    .biggerbox {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 100px;
    }

    .bigbox {
        display: flex;
        align-items: center;
        height: 100%;
        width: 63vw;
        margin-bottom: 5%;
        flex-direction: row; /* Holder tekst og bilde i radvisning på større skjermer */
    }

    .bilder {
        display: flex;
        justify-content: right;
        margin: 5%;
        width: 40%;
    }

    .tekstboks {
        text-align: left;
        font-family: 'Bodoni Moda', serif;
        font-size: 22px;
        margin: 5%;
        width: 45%;
    }

    #cvbilde {
        width: 75%;
    }

    /* Responsiv for mellomstore skjermer (f.eks. nettbrett) */
    @media (max-width: 768px) {
        .bigbox {
            flex-direction: column; /* Endrer til kolonnevisning */
            width: 80vw;
        }

        .tekstboks, .bilder {
            width: 100%; /* Full bredde */
            margin: 2%;
            text-align: center;
        }

        .bilder {
            display: flex;
            justify-content: center;
        }

        #cvbilde {
            width: 60%; /* Justerer bildestørrelsen */
        }
    }

    /* Responsiv for små skjermer (f.eks. mobil) */
    @media (max-width: 480px) {
        .biggerbox {
            margin-top: 50px;
        }

        .bigbox {
            width: 90vw;
        }

        .tekstboks {
            font-size: 18px; /* Mindre font for mobil */
        }

        #cvbilde {
            width: 80%; /* Øker bildestørrelsen litt på mobil */
        }
    }
</style>

