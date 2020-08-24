const { html } = require('common-tags');

const codepen = (url, build_options, height = 600) => html`
  <iframe
    height="${height}"
    src="${url}?height=${height}&theme-id=light&${build_options}&embed-version=2"
    scrolling="no"
    frameborder="no"
    allowtransparency="true"
    loading="lazy"
    style="width: 100%;">
  </iframe>
`

module.exports = codepen;
