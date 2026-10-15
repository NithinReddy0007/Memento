const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['src/fx/bundle-entry.jsx'],
  bundle: true,
  outfile: 'assets/memento-fx.js',
  format: 'iife',
  globalName: 'MementoFxPackage',
  minify: false,
  define: {
    'process.env.NODE_ENV': '"production"'
  }
}).then(() => {
  console.log('Build succeeded: assets/memento-fx.js');
}).catch((err) => {
  console.error('Build failed:', err);
  process.exit(1);
});
