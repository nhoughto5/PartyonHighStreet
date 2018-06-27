const path = require('path');

exports.modifyWebpackConfig = ({ config, stage }) => {
  if (stage === 'build-html') {
    config.loader('null', {
      test: /pixi.js/,
      loader: 'null-loader',
    });
  }
};

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    const newsPostTemplate = path.resolve('src/templates/newsPost.js');

    resolve(graphql(`
        {
          allMarkdownRemark {
            edges {
              node {
                html
                id
                frontmatter{
                  path
                  title
                }
              }
            }
          }
        }
      `).then(res => {
        if (res.errors) {
          return Promise.reject(res.errors);
        }

        res.data.allMarkdownRemark.edges.forEach(({ node }) => {
          createPage({
            path: node.frontmatter.path,
            component: newsPostTemplate,
          });
        });
      }),);
  });
};
