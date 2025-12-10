import { defineConfig, fontProviders } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import UnoCSS from "unocss/astro";
import rehypeFigure from "@microflash/rehype-figure";

// https://astro.build/config
export default defineConfig({
  site: "https://kururin.cc",
  integrations: [mdx(), icon(), sitemap(), UnoCSS()],
  markdown: {
    rehypePlugins: [rehypeFigure],
    shikiConfig: {
      theme: "monokai",
    }
  },
  output: "static",
  prefetch: true,
  build: {
    assets: "astro",
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          assetFileNames: "assets/[name][extname]",
        },
      },
      cssMinify: "lightningcss"
    },
  },
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Oranienbaum",
        cssVariable: "--font-lora",
        display: "swap",
        styles: ["normal"],
        weights: ["400"],
        subsets: ["latin"],
        fallbacks: ["serif"],
      }
    ]
  }
});
