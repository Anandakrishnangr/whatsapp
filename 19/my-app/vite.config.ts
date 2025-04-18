import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import svgr from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
  svgr({
    svgrOptions: {
      icon: true,
      // This will transform your SVG to a React component
      exportType: "named",
      namedExport: "ReactComponent",
    },
  }),
  tailwindcss(),],
  resolve: {
    alias: {
      '@': '/src',
      'components': '/src/components',
      'types': '/src/types',
      "constants":'/src/constant'

    },
  },
  server: {
    host: '0.0.0.0',           // Needed for Docker
    port: 5173,
    strictPort: true,
    watch: {
      usePolling: true         // Needed for volume sync + live reload
    },
    hmr: {
      port: 24678              // Match mapped port in compose
    }
  }

})
