const fs = require("fs");

const articles = fs.readFileSync("./articles.json");

const convertTitleToFile = (title) =>
  `${encodeURI(
    title
      .toLowerCase()
      .replace(/[.\-:`'"?!:;,\[\]{}()*&^%$#@+=]/g, "")
      .trim()
      .replace(/\s/g, "_")
  )}.md`;

const createPost = (postInfo) => {
  const { body_markdown, published_at, title, main_image } = postInfo;
  const md = body_markdown.replace(/(---)?[\S\s\n\r]*---/m, "").trim();
  const file = `---
title: "${title}"${published_at ? `\ndate: ${published_at}\n` : ""}${
    main_image ? `cover_image: ${main_image}` : ""
  }
---
${md}
  `.trim();
  const fileName = convertTitleToFile(title);
  const folder = "./writing/";
  fs.writeFileSync(folder + fileName, file, "utf-8");
};

JSON.parse(articles).map(createPost);
