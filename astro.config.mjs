import { defineConfig } from "astro/config";

// GitHub Pages serves the repo at https://yios823.github.io/content-site/
// `site` is the canonical origin, `base` is the path prefix Astro uses
// for routing and asset URLs.
export default defineConfig({
  site: "https://yios823.github.io",
  base: "/content-site",
  build: {
    format: "directory",
  },
});
