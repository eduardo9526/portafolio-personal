import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/portafolio-personal/", // 👈 Agregamos el nombre exacto de tu repositorio
  test: {
    environment: 'jsdom',
    globals: true,
    include: ['src/**/*.spec.{js,jsx}'],
  },
});