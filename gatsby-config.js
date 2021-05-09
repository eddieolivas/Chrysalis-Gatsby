require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `Chrysalis Web Development`,
    description: `Chrysalis Web Development in Gatsby`,
    author: `@Eddie-Olivas`,
    image: `${__dirname}/src/images/Chrysalis-Logo-small1.png`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-72004715-1",
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          require("tailwindcss"),
          require("./tailwind.config.js"), // Optional: Load custom Tailwind CSS configuration
        ],
      }
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Raleway`,
          `300,400,500,700` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-source-graphql",
      options: {
        // This type will contain remote schema Query type
        typeName: `WPGraphQL`,
        // This is field under which it's accessible
        fieldName: `wpgraphql`,
        // Url to query from
        url: process.env.WP_URL,
      },
    },
    {
      resolve: `gatsby-plugin-catch-links`,
      options: {
        excludePattern: /(excluded-link|external)/,
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
  ],
}
