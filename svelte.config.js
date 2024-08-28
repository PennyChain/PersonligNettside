import adapter from '@sveltejs/adapter-static'; // Eller adapter-auto hvis du foretrekker det.

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: 'build', // Spesifiserer mappen hvor bygget skal lagres
      assets: 'build',
      fallback: null,
      precompress: false,
      strict: true
    }),
    paths: {
      base: ''
    },
  }
};

export default config;
