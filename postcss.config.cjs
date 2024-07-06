module.exports = {
  plugins: [
    require('@fullhuman/postcss-purgecss')({ content: ['./**/*.astro'] }),
    require('postcss-preset-env')
  ]
}
