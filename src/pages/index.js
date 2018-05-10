import React from 'react'
import Link from 'gatsby-link'
import Test from '../Classes/Test';
const IndexPage = ({data}) => {
  console.log("Hello");
return (  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <h3>{Test.sayHello()}</h3>
    <Link to="/page-2/">Go to page 2</Link>
    {data.allMarkdownRemark.edges.map(post => (
        <Link
            key={post.node.id}
            to={post.node.frontmatter.path}>
            {post.node.frontmatter.title}
        </Link>
    ))}
  </div>)
};

export const pageQuery = graphql `
    query IndexQuery {
      allMarkdownRemark(limit: 10) {
        edges {
          node {
            id
            frontmatter {
              title
              path
            }
          }
        }
      }
    }
`;

export default IndexPage
