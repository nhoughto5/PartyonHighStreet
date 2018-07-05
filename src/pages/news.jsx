import React from 'react';

const NewsPage = ({ data }) => (
  <div>
    <h1>News Page!!</h1>
    {data.allMarkdownRemark.edges.map(newsPost => (
      <div>
        <a href={newsPost.node.frontmatter.path}>{newsPost.node.frontmatter.title}</a>
        <h2>{newsPost.node.frontmatter.summary}</h2>
      </div>
    ))}
  </div>
);

export const pageQuery = graphql`
  query NewsQuery {
    allMarkdownRemark(limit: 10) {
      edges {
        node {
          frontmatter {
            title
            path
            summary
          }
        }
      }
    }
  }
`;

export default NewsPage;
