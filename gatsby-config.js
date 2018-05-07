module.exports = {
  siteMetadata: {
    title: 'The Party on High Street',
  },
  plugins: [
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/posts/`,
        name: 'posts',
      }
    },
      'gatsby-transformer-remark'
  ],
};
