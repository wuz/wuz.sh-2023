const fs = require("fs");
const path = require("path");
const postcss = require("postcss");

const functions = require("./utils");

/*
 * Plugins
 */
const atImport = require("postcss-import");
const cssvariables = require("postcss-css-variables");
const cssFunctions = require("postcss-functions");
const cssFor = require("postcss-for");
const cssNesting = require("postcss-nesting");

const fileName = "main.css";

module.exports = class {
  async data() {
    const rawFilepath = path.join(__dirname, `../_includes/styles/${fileName}`);
    return {
      permalink: `css/${fileName}`,
      rawFilepath,
      rawCss: await fs.readFileSync(rawFilepath)
    };
  }

  async render({ rawCss, rawFilepath }) {
    return await postcss()
      .use(atImport())
      .use(cssFor)
      .use(cssNesting())
      .use(cssvariables({ preserve: true }))
      .use(cssFunctions({ functions }))
      .process(rawCss, { from: rawFilepath })
      .then(result => result.css);
  }
};
