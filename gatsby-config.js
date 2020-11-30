const path = require("path")

module.exports = {
  siteMetadata: {
    title: `Pierce Faraone`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    url: `https://pierce-faraone.netlify.app/`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-root-import`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/, // See below to configure properly
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon-32x32.png`, // This path is relative to the root of the site.
      },
    },
    // {
    //   resolve: "gatsby-plugin-root-import",
    //   options: {
    //     components: path.join(__dirname, "src/components"),
    //     layouts: path.join(__dirname, "src/layouts"),
    //     templates: path.join(__dirname, "src/templates"),
    //     scss: path.join(__dirname, "src/scss"),
    //     types: path.join(__dirname, "src/types"),
    //     src: path.join(__dirname, "src"),
    //     pages: path.join(__dirname, "src/pages"),
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
