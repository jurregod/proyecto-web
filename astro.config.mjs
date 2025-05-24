// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  // Enable processing of Markdown content
  markdown: {
    shikiConfig: {
      // Enable syntax highlighting in code blocks
      theme: "github-dark",
    },
    // Configuración adicional de Markdown
    remarkPlugins: [],
    rehypePlugins: [],
  },
  // Configuración para el servidor de desarrollo
  server: {
    port: 4321,
    host: false, // Cambiar a true para exponer en la red
  },
  // Optimización de imágenes
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
    // Configuraciones de optimización
    domains: [],
    remotePatterns: [],
  },
  // Configuración de rutas y build
  build: {
    assets: "_astro",
    format: "directory",
  },
  // Configuraciones de rendimiento
  vite: {
    ssr: {
      noExternal: ["@astrojs/*"],
    },
    build: {
      minify: true,
      cssMinify: true,
      // Optimizaciones de build sin manualChunks que estaba generando el error
      rollupOptions: {
        output: {
          // Usamos una configuración más segura para chunks
          chunkFileNames: "chunks/[name].[hash].js",
        },
      },
    },
  },
  // Configuraciones adicionales para mejorar la experiencia
  experimental: {
    // Las opciones experimentales soportadas actualmente
    clientPrerender: true,
  },
});
