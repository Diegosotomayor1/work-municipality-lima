import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: "static",
  base: " https://github.com/Diegosotomayor1/work-municipality-lima", // Reemplaza con el nombre de tu repositorio
});
