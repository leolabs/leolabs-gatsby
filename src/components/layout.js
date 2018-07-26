import React from 'react'
import { Link } from 'gatsby'
import get from 'lodash/get'

import './layout-style.css'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`

    const siteTitle = get(this, 'props.title')

    const header = (
      <h1>
        <Link to={'/'}>{siteTitle}</Link>
      </h1>
    )

    return (
      <div className="content">
        <header>{header}</header>
        {children}
      </div>
    )
  }
}

export default Template
