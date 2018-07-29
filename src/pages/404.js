import React from 'react'

import Layout from '../components/layout'

const NotFoundPage = () => (
  <Layout>
    <Helmet>
      <title>Page not found - {siteTitle}</title>
    </Helmet>

    <article>
      <h1>The page you're looking for here doesn't exist</h1>
    </article>
  </Layout>
)

export default NotFoundPage
