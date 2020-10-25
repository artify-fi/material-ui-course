
module.exports = {
  siteMetadata: {
    title: "Nykyaikaiset Progressiiviset Hakukonenoptimoidut Verkkosivut Ja Mobiilisovellukset Pienyrittajalle",
    description: "This is WebDev Portfolio Site",
    author: "@art_bachmann",
    twitterUsername: "@artbachmann",
    image: "/twitter-img.png",
    siteUrl: "https://artify.fi",
  },
  plugins: [
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-react-helmet`,
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`
  ],
}
