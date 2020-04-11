const md = require("markdown-it")();
const mdAttrs = require("markdown-it-attrs");
const mdContainer = require("markdown-it-container");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const moment = require("moment");

module.exports = config => {
  let env = process.env.ELEVENTY_ENV;
  config.addLayoutAlias("post", "layouts/post.liquid");
  config.addPassthroughCopy("fonts");
  config.addPassthroughCopy("js");
  config.addPassthroughCopy("assets");
  config.addPlugin(syntaxHighlight);
  config.addLiquidFilter("prettyDate", function(value) {
    const date = moment(value);
    return date.format("MMM Do YYYY");
  });

  // md.use(mdContainer, "aspect", {
  //   validate: function(params) {
  //     return params.trim().match(/^aspect\s+(.*)$/);
  //   },

  //   render: function(tokens, idx) {
  //     var m = tokens[idx].info.trim().match(/^aspect\s+(.*)$/);

  //     if (tokens[idx].nesting === 1) {
  //       // opening tag
  //       return `<figure style="--aspect-ratio:${md.utils.escapeHtml(m[1])}">`;
  //     } else {
  //       // closing tag
  //       return "</figure>\n";
  //     }
  //   }
  // });
  md.use(mdAttrs);
  config.setLibrary("md", md);
};
