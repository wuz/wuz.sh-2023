const fs = require("fs");
const path = require("path");
const postcss = require("postcss");

const functions = require("./utils");

/*
 * Plugins
 */
const precss = require("precss");
const cssFunctions = require("postcss-functions");
const cssnano = require("cssnano");
const postcssScss = require("postcss-scss");

const fileName = "main.scss";

module.exports = class {
  async data() {
    const rawFilepath = path.join(__dirname, `../_includes/styles/${fileName}`);
    return {
      permalink: `css/main.css`,
      rawFilepath,
      rawCss: await fs.readFileSync(rawFilepath),
    };
  }

  async render({ rawCss, rawFilepath }) {
    return await postcss()
      .use(precss())
      .use(cssFunctions({ functions }))
      .use(
        cssnano({
          preset: "default",
        })
      )
      .process(rawCss, { from: rawFilepath, syntax: postcssScss })
      .then((result) => result.css);
  }
};
