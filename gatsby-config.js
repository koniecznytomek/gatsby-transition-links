module.exports = {
  siteMetadata: {
    title: `Gatsby Transition Links`,
    description: `Examples`,
    author: `@tomekkoniec`,
  },
  plugins: [
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-typescript`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
        icons: [
          {
            src: `/static/favicons/fav.png`,
            size: `192x192`,
            type: `image/png`,
          },
        ],
      },
    },
  ],
};
