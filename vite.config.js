import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import nodePolyfills from 'rollup-plugin-polyfill-node';

export default defineConfig({
  plugins: [react(), nodePolyfills()],
  build: {
    rollupOptions: {
      plugins: [nodePolyfills()]
    }
  }
});
