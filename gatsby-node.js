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
    const showPostTemplate = path.resolve('src/templates/showPost.js');

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
                  summary
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
            component: showPostTemplate,
          });
        });
      }),);
  });
};
