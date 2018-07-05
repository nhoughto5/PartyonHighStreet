import React from 'react';
import styled from "styled-components";
import NewsBanner from '../components/news-banner';

const ListWrapper = styled.div`
  margin: 2rem 2rem;
  position: relative;
  a {
    font-size: 3rem;
  }
  p{
    padding-left: 2%;
  }
`;

const NewsPage = ({ data }) => (
  <div>
    <NewsBanner></NewsBanner>
    <ListWrapper>
    {data.allMarkdownRemark.edges.map(newsPost => (
      <div key={newsPost.node.frontmatter.title}>
        <a href={newsPost.node.frontmatter.path}>
        &#8226;{newsPost.node.frontmatter.title}
        </a>
        <p>{newsPost.node.frontmatter.summary}</p>
      </div>
    ))}
    </ListWrapper>
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
