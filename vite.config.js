import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: './index.html',
        about: './about.html',
        certificated: './certificated.html',
        solution: './solution.html'
      }
    }
  }
});
