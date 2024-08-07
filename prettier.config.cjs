/** @type {import("prettier").Config} */
module.exports = {
  // i am just using the standard config, change if you need something else
  ...require('prettier-config-standard'),
  plugins: [require.resolve('prettier-plugin-astro')],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
        htmlWhitespaceSensitivity: 'ignore'
      }
    },
    {
      files: '*.mdoc',
      options: {
        parser: 'markdown'
      }
    }
  ]
}
