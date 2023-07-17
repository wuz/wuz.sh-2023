import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";
import rehypePrettyCode from 'rehype-pretty-code';
import vercel from "@astrojs/vercel/serverless";
import preact from "@astrojs/preact";
import { getHighlighter } from 'shiki';


const prettyCodeOptions = {
  theme: "min-dark",
  onVisitLine(node) {
    if (node.children.length === 0) {
      node.children = [{
        type: "text",
        value: " "
      }];
    }
  },
  onVisitHighlightedLine(node) {
    node.properties.className.push("highlighted");
  },
  onVisitHighlightedWord(node) {
    node.properties.className = ["word"];
  },
  tokensMap: {},
};


// https://astro.build/config
export default defineConfig({
  site: "https://wuz.sh",
  experimental: {
    assets: true
   },
  markdown: {
    syntaxHighlight: false,
    rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]]
  },
  integrations: [mdx(), preact()],
  output: "server",
  adapter: vercel({imageService: true})
});