const path = require('path');

exports.createPages = ({boundActionCreators, graphql}) => {
  const {createPage} = boundActionCreators;

  return new Promise((resolve, reject) => {
    const postTemplate = path.resolve('src/templates/post.js');
  
    resolve(
      graphql(`
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
        if(res.errors){
          return Promise.reject(res.errors);
        }
  
        res.data.allMarkdownRemark.edges.forEach(({node}) => {
          createPage({
            path: node.frontmatter.path,
            component: postTemplate
          })
        });

        return
      })
    );
  })
};