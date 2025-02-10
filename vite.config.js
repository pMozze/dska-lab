import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: './index.html',
        about: './about.html',
        certificated: './certificated.html',
        solution: './solution.html',
        typography: './src/styles/base/typography.scss'
      },
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`
      }
    }
  }
});
