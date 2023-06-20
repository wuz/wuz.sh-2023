import { defineConfig } from "astro/config";
import { astroImageTools } from "astro-imagetools";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";
import highlightCode from "./rehype-plugins/rehype-highlight-code";
import metaAttribute from "./rehype-plugins/rehype-meta-attribute";

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: "https://wuz.sh",
  integrations: [mdx(), sitemap(), astroImageTools, partytown(), image()],
  markdown: {
    rehypePlugins: [metaAttribute, highlightCode],
    syntaxHighlight: "prism",
  },
});
