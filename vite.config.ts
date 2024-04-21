import { defineConfig } from "vite";

export default defineConfig({
  "build": {
    minify: false,
    reportCompressedSize: false,
    lib: {
      "entry": {
        index:"lib/index.js"
      },
      "formats":["es"],
    }
  },
})