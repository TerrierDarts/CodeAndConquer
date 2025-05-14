import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  integrations: [mdx()],
  output: "server",
  adapter: cloudflare({
    imageService: "cloudflare", // Use Cloudflare's image service instead
    mode: "directory",
    functionPerRoute: false,
    // This disables the automatic session configuration
    sessionKVBindingName: null,
  }),
});
