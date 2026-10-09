import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";
import viteReact from "@vitejs/plugin-react";
import tsConfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    // TanStack Start — entry server untuk SSR error wrapper kamu
    tanstackStart({
      server: { entry: "server" },
    }),
    // Nitro dengan preset Vercel — handle routing & output otomatis
    nitro({ preset: "vercel" }),
    // React plugin
    viteReact(),
    // Path alias (@/...) dari tsconfig.json
    tsConfigPaths(),
    // Tailwind CSS v4
    tailwindcss(),
  ],
});