import { defineConfig } from "vite";
import { resolve } from "path";
import getHtmlEntries from "./src/views/htmlRead";

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
          index: resolve(__dirname, 'index.html')
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