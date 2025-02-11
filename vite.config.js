import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteImagemin from 'vite-plugin-imagemin'; 

export default defineConfig({
  plugins: [
    react(),
    viteImagemin({
      gifsicle: {
        optimizationLevel: 3, 
      },
      optipng: {
        optimizationLevel: 7, 
      },
      pngquant: {
        quality: [0.6, 0.8], 
      },
      svgo: {
        plugins: [
          {
            removeViewBox: false, 
          },
        ],
      },
    }),
  ],
  base: "/portfolio/",  
  build: {
    outDir: "dist", 
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
    chunkSizeWarningLimit: 3000,
  },
});
