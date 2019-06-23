module.exports = {
	pathPrefix: "/",
  siteMetadata: {
    title: `OIPM 2018 Annual Report`,
    description: `Data analysis for New Orleans Office of the Independent Police Monitor's 2018 Annual Report.`,
    author: `Marvin Arnold`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `New Orleans Office of the Independent Police Monitor (OIPM) 2018 Annual Report`,
        short_name: `oipm-annual-report-2018`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/oipm-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    'gatsby-plugin-offline',
  ],
}
