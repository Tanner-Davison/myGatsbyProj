/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `My Gatsby Site`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: [`Orbitron`, `Archivo`, `Roboto Mono`],
      },
    },
    {
      resolve: "gatsby-plugin-alias-imports",
      options: {
        alias: {
          components: "src/components",
          styles: "src/styles",
          utils: "src/utils",
          // add more aliases here as needed
        },
        extensions: ["js", "jsx"],
      },
    },
  ],
};
