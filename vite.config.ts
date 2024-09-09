import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'tabela-produtos', // Name of your app
      filename: 'remoteEntry.js', // Entry file for exposing modules
      exposes: {
        './Home': './src/components/Pages/Home/Home.tsx', // Exposing Home page
        './ProductDetails': './src/components/Pages/ProductDetails/ProductDetails.tsx', // Exposing Product Details page
      },
      remotes: {
        jeff: 'http://10.5.10.121:3001/assets/remoteEntry.js', // Remote app at localhost:3001
        // Add more remotes as needed here
      },
      shared: ['react', 'react-dom'], // Shared dependencies to avoid duplication between apps
    }),
  ],
  build: {
    outDir: 'src/dist', // Output directory for built files inside the src folder
    target: 'esnext', // Ensure compatibility with modern browsers and module federation
  },
  server: {
    port: 3000, // You can specify your development server's port here if needed
    host: '0.0.0.0', // Allow connections from network (useful for remote access or testing)
  },
  preview: {
    port: 5000, // Port for preview mode (after build), feel free to change it
    host: '0.0.0.0', // Allow preview mode to be accessible from other devices
  },
});
