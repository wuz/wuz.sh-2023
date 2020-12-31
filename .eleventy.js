const markdownIt = require('markdown-it');
const mdAttrs = require('markdown-it-attrs');
const mdContainer = require('markdown-it-container');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const { format } = require('date-fns');
const pluginRss = require('@11ty/eleventy-plugin-rss');
let Nunjucks = require('nunjucks');

const { codepen } = require('./shortcode-templates');

module.exports = (config) => {
	let env = process.env.ELEVENTY_ENV;

	let nunjucksEnvironment = new Nunjucks.Environment(new Nunjucks.FileSystemLoader('_includes'));

	config.setLibrary('njk', nunjucksEnvironment);

	config.addLayoutAlias('post', 'layouts/post.njk');
	config.addPassthroughCopy('fonts');
	config.addPassthroughCopy('js');
	config.addPassthroughCopy('sw.js');
	config.addPassthroughCopy('assets');
	config.addPlugin(pluginRss);
	config.addPlugin(syntaxHighlight);
	config.addFilter('prettyDate', function (value) {
		const date = new Date(value);
		return format(date, 'MMM do yyyy');
	});

	config.addFilter('log', function (value) {
		console.log(value);
	});

	config.addShortcode('github', function (repo) {
		return `[${repo.replace('https://github.com/', '')}](${repo})`;
	});

	config.addFilter('garden_stage', function (stage = 0) {
		const stages = [
			`This post is still in the early stages. Beware - here be mental dragons!`,
			`This post is growing. The basic thoughts are here, but they haven't been fully fleshed out.`,
			`This post is in bloom. It's fleshed out and unlikely to change.`,
			`This post is wilting. The ideas here don't represent my current thought process.`,
		];
		return stages[Number(stage)];
	});

	config.addFilter('garden_stage_icon', function (stage = 0) {
		const stagesIcon = [`🌧`, `🌱`, `💐`, `🥀 `];
		return stagesIcon[Number(stage)];
	});

	config.addShortcode('codepen', function (pen, options, height) {
		const html = codepen(pen, options, height);
		console.log(html);
		return html;
	});

	config.addShortcode('twitter', function (id) {
		return `${id}`;
	});

	config.addShortcode('tweet', function (id) {
		return `${id}`;
	});

	config.addShortcode('medium', function (id) {
		return `https://medium.com/${id}`;
	});

	config.addShortcode('youtube', function (id) {
		return `https://medium.com/${id}`;
	});

	config.addShortcode('devto', function (link) {
		return `https://dev.to/${link}`;
	});

	config.addShortcode('devcomment', function (link) {
		return `https://dev.to/${link}`;
	});

	config.addShortcode('glitch', function (app, screen = 'app') {
		return `https://glitch.com/embed/#!/${app}`;
	});

	const now = new Date();

	const livePosts = (post) => post.date <= now && !post.data.draft;
	config.addCollection('posts', (collection) => {
		return [...collection.getFilteredByGlob('./writing/*.md').filter(livePosts)].reverse();
	});

	config.addCollection('postFeed', (collection) => {
		return [...collection.getFilteredByGlob('./writing/*.md').filter(livePosts)].reverse().slice(0, 5);
	});

	let options = {
		html: true,
		breaks: true,
		linkify: true,
		typographer: true,
	};

	const md = markdownIt(options);

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
	config.setLibrary('md', md);
};
