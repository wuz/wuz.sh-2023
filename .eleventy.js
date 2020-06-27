const md = require("markdown-it")();
const mdAttrs = require("markdown-it-attrs");
const mdContainer = require("markdown-it-container");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const moment = require("moment");
const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = (config) => {
  let env = process.env.ELEVENTY_ENV;
  config.addLayoutAlias("post", "layouts/post.njk");
  config.addPassthroughCopy("fonts");
  config.addPassthroughCopy("js");
  config.addPassthroughCopy("assets");
  config.addPlugin(pluginRss);
  config.addPlugin(syntaxHighlight);
  config.addFilter("prettyDate", function (value) {
    const date = moment(value);
    return date.format("MMM Do YYYY");
  });

  config.addFilter("log", function (value) {
    console.log(value);
  });

  config.addShortcode("github", function(repo) {
    return `[${repo.replace("https://github.com/", '')}](${repo})`;
  });

  config.addShortcode("twitter", function(id) {
    return `${id}`;
  });

  config.addShortcode("tweet", function(id) {
    return `${id}`;
  });

  config.addShortcode("medium", function(id) {
    return `https://medium.com/${id}`;
  });

  config.addShortcode("youtube", function(id) {
    return `https://medium.com/${id}`;
  });

  config.addShortcode("devto", function(link) {
    return `https://dev.to/${link}`;
  });

  config.addShortcode("devcomment", function(link) {
    return `https://dev.to/${link}`;
  });

  config.addShortcode("glitch", function(app, screen = "app") {
    return `https://glitch.com/embed/#!/${app}`;
  });

  const now = new Date();

  const livePosts = post => post.date <= now && !post.data.draft;
  config.addCollection('posts', collection => {
    return [
      ...collection.getFilteredByGlob('./writing/*.md').filter(livePosts)
    ].reverse();
  });

  config.addCollection('postFeed', collection => {
    return [...collection.getFilteredByGlob('./writing/*.md').filter(livePosts)]
      .reverse()
      .slice(0, 5);
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
