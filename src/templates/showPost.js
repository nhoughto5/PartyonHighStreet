import React from 'react';
import Helmet from 'react-helmet';

import { GridWrapper } from "../components/layout/shared.js";

export default function Template({ data }) {
  const { markdownRemark: post } = data;

  return (
      <GridWrapper>
        <h1>{post.frontmatter.title}</h1>
        <h3>{new Date(post.frontmatter.date).toDateString()}</h3>
        <hr></hr>
        <br></br>
        <div className="markdown" dangerouslySetInnerHTML={{ __html: post.html }}/>
        <br></br>
        <a className="facebookURL" href={post.frontmatter.fbURL}>www.facebook.com/events/{post.frontmatter.title}</a>
      </GridWrapper>
  );
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!){
    markdownRemark(frontmatter: {path: {eq: $path}}){
      html
      frontmatter {
        path
        title
        date
        fbURL
      }
    }
  }
`;
