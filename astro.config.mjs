// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import cloudflare from "@astrojs/cloudflare";

import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
    site: "https://tedxkmutt.com",
    integrations: [tailwind(), icon(), react(), sitemap()],
    output: "hybrid",
    adapter: cloudflare({
        platformProxy: {
            enabled: true,
        },
    }),
});
