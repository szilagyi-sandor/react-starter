/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="vite/client" />

import svgr from 'vite-plugin-svgr';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: 'esnext',
  },
  plugins: [
    svgr(),
    react(),
    tsconfigPaths(),
    checker({
      typescript: true,
      eslint: {
        lintCommand:
          'eslint --cache --cache-location ./node_modules/.cache/eslint src',
      },
    }),
  ],
});
