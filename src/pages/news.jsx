import React from 'react';
import Link from 'gatsby-link';

const NewsPage = ({data}) => (
  <div>
    <h1>News Page!!</h1>
    {data.allMarkdownRemark.edges.map(newsPost => (
      <div>
      <a href={newsPost.node.frontmatter.path}>{newsPost.node.frontmatter.title}</a>
      
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
          }
        }
      }
    }
  }
`;

export default NewsPage;
