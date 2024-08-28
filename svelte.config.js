import adapter from '@sveltejs/adapter-static'; // Eller adapter-auto hvis du foretrekker det.

export default {
  kit: {
    adapter: adapter({
      // Du kan spesifisere mappen hvor den bygde nettsiden skal legges, f.eks. 'build' eller 'dist'
      pages: 'build', // Sørg for at denne er riktig
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
