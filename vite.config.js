import { defineConfig } from "vite";
import { dirname, resolve } from "path";
import { fileURLToPath } from 'url';
import getHtmlEntries from "./src/views/htmlRead";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    base: './',
    css: {
        devSourcemap: true
    },
    build: {
      outDir: 'docs',
      target: 'esnext',
      rollupOptions: {
        input: {
          ...getHtmlEntries(),
          index: resolve(__dirname, 'index.html'),
          // projects: resolve(__dirname, 'src/pages/projects.html'),
          // about: resolve(__dirname, 'src/pages/about.html'),
          // contact: resolve(__dirname, 'src/pages/contact.html')
        }
      }
    },
    test: {
        workspace: [
          {
            extends: true,
            test: {
              environment: 'jsdom',
            },
          },
        ],
      },
  })