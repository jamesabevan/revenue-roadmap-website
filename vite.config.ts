import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import path from "path"
import { componentTagger } from "lovable-tagger"
import { copyFileSync } from "fs"

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Copy _redirects to dist/
  copyFileSync("public/_redirects", "dist/_redirects")

  return {
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [
      react(),
      mode === "development" && componentTagger(),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    publicDir: "public",
  }
})
