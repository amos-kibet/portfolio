/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

// const strapiConfig = {
//   apiURL: process.env.STRAPI_API_URL,
//   accessToken: process.env.STRAPI_TOKEN,
// };
module.exports = {
  siteMetadata: {
    title: "Personal Portfolio",
    description:
      "This is a personal Portfolio Site Built with Gatsby and served by Strapi CMS API",
    author: "@amos-kibet",
    twitterUsername: "@amoskibet_",
    image: "/twitter-img.png",
    siteUrl: "https://fly.dev", // to update url once deployed
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.STRAPI_API_URL || "http://localhost:5000/api",
        accessToken: process.env.STRAPI_TOKEN,
        queryLimit: 1000, // Default to 100
        collectionTypes: [`jobs`, `projects`, `blogs`], //changed from contentTypes
        singleTypes: [`about`],
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Roboto",
              variants: ["400", "700"],
            },
            { family: "Open Sans" },
          ],
        },
      },
    },
  ],
};
