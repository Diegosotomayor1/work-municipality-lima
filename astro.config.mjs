import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: "https://Diegosotomayor1.github.io",
  base: "/work-municipality-lima",
});
