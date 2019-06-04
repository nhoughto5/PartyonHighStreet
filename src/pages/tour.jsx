import React from 'react';
import styled from "styled-components";
import TourBanner from '../components/tour-banner';
import Constant from '../classes/Constants';

const ListWrapper = styled.div`
  margin: 2rem ${Constant.MAIN_PADDING}%;
  position: relative;
  text-align:center;
  a {
    font-size: 3rem;
  }
  p{
    padding-left: 2%;
  }
`;
const ListSubHead = styled.div`
  margin: 2rem ${Constant.MAIN_PADDING}%;
  position: relative;
  font-size: 3rem;
  font-weight: 700;
  text-decoration: underline solid rgb(244, 131, 66);
  text-align:center;
`;

const TourPage = ({ data }) => (
  <div>
    <TourBanner></TourBanner>
    <h1 className="showTime">Upcoming Shows</h1>
    <ListWrapper>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      {data.allMarkdownRemark.edges.map(showPost => (

        <a href={showPost.node.frontmatter.path}>
          <div className="tour-entry" key={showPost.node.frontmatter.title}>
            <div className="leftAlign">{showPost.node.frontmatter.title}: <div className="locationClass">At: {showPost.node.frontmatter.location}</div></div>
            <p>{new Date(showPost.node.frontmatter.date).toDateString()}</p>
          </div>
        </a>
      ))}
      <hr></hr>
      <hr></hr>
    </ListWrapper>

  </div>
);

export const pageQuery = graphql`
  query ShowQuery {
    allMarkdownRemark(
      limit: 100
      sort: {fields:[frontmatter___date]} 
      filter: {frontmatter: {published: {eq: true}}}
    ) {
      edges {
        node {
          frontmatter {
            title
            path
            summary
            published
            date
            location
          }
        }
      }
    }
  }
`;

export default TourPage;
