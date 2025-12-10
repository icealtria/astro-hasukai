import { defineConfig, presetWind4, presetTypography } from "unocss";
import transformerDirectives from "@unocss/transformer-directives";
import { presetMaterialColor } from "./theme";

export default defineConfig({
  presets: [
    presetWind4({
      preflights: {
        reset: false,
        theme: 'on-demand',
      },
      dark: "media",
    }),
    presetMaterialColor({
      // primary: "#405e0d",
      primary: "#935e13",
      scheme: "neutral",
      darkMode: false,
    }),
    presetTypography()
  ],
  shortcuts: {
    avatar: "w-36 h-36",
    "button-xl": "px-6 py-4",
    "button": "transition-colors hover:bg-inverse-surface",
    "header-link":
      "px-4 py-2 transition-colors mx-1 md:mx-4 flex items-center gap-1",
  },
  transformers: [transformerDirectives()],
});
