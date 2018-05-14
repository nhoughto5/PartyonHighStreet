import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/header.jsx';
import './index.scss';

const Layout = ({ children, data }) => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>The Party On High Street</title>
      {/* <link rel="shortcut icon" href={favicon} /> */}
      <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,600i|Press+Start+2P" rel="stylesheet" />
    </Helmet>
    <Header siteTitle={data.site.siteMetadata.title} />
    <div>
      {children()}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
