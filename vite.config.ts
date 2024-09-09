import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'tabela-produtos',
      filename: 'remoteEntry.js',
      exposes: {
        './Home': './src/components/Pages/Home/Home.tsx', // Exposing Home
        './ProductDetails': './src/components/Pages/ProductDetails/ProductDetails.tsx', // Exposing Product Details
      },
      remotes: {
        // otherApp: 'otherApp@http://localhost:3001/remoteEntry.js', // URL of remote app's remoteEntry.js file
        // anotherRemote: 'anotherRemote@http://localhost:3002/remoteEntry.js', // Another remote app URL
      },
      shared: ['react', 'react-dom'], // Dependencies that should be shared between federated modules
    }),
  ],
  build: {
    target: 'esnext',
  },
});
