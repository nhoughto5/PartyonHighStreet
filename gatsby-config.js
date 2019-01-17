module.exports = {
  siteMetadata: {
    title: 'The Party on High Street',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/posts/`,
        name: 'posts',
      },
    },
    'gatsby-transformer-remark',
  ],
  pathPrefix: '/',
};
