import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svg from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svg(), react()],
})
