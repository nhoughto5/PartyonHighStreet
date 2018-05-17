import React from 'react'
import Link from 'gatsby-link'

import FullPageBanner from '../components/full-page-banner'
import LatestNews from '../components/index-news'

const IndexPage = () => (
  <div>
    <FullPageBanner />
    <Grid />
  </div>
)

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
