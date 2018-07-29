import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

const NotFoundPage = () => (
  <Layout>
    <Helmet>
      <title>Page not found</title>
    </Helmet>

    <article>
      <h1>The page you're looking for here doesn't exist</h1>
    </article>
  </Layout>
)

export default NotFoundPage
