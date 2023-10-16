import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { viteCommonjs, esbuildCommonjs } from "@originjs/vite-plugin-commonjs"; //vite 에서 react-moment 에러발생 -> esbuild를 사용하여 해결

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    esbuildOptions: {
      plugins: [esbuildCommonjs(["react-moment"])],
    },
  },
});
