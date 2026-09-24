import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { existsSync } from 'node:fs';
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: { preserveSymlinks: true },
  define: { __HAS_RESUME__: JSON.stringify(existsSync(new URL('./public/Albin_Binoy_George_Resume.pdf', import.meta.url))) },
});


