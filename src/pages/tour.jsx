import React from 'react';
import styled from "styled-components";
import TourBanner from '../components/tour-banner';

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

const TourPage = ({ data }) => (
  <div>
    <TourBanner></TourBanner>
    <ListWrapper>
    {data.allMarkdownRemark.edges.map(showPost => (
      <div key={showPost.node.frontmatter.title}>
        <a href={showPost.node.frontmatter.path}>
        &#8226;{showPost.node.frontmatter.title}
        </a>
        <p>{showPost.node.frontmatter.summary}</p>
      </div>
    ))}
    </ListWrapper>
  </div>
);

export const pageQuery = graphql`
  query ShowQuery {
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

export default TourPage;
