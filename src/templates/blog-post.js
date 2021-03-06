import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'

import Bio from '../components/Bio'
import Layout from '../components/layout'

import "prismjs/themes/prism-okaidia.css"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const header = get(this.props, 'data.markdownRemark.frontmatter.header')
    const image = get(this.props, 'data.markdownRemark.frontmatter.header.image')
    const excerpt = get(this.props, 'data.markdownRemark.excerpt')

    return (
      <Layout header={header}>
        <Helmet>
          <title>{post.frontmatter.title} - {siteTitle}</title>
          <meta name="description" content={excerpt} />
          {image ? <meta name="twitter:image" content={image} /> : null}
        </Helmet>
        <h1>{post.frontmatter.title}</h1>
        <article dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr />
        <Bio />
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      excerpt
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        header {
          image
          color
        }
      }
    }
  }
`
