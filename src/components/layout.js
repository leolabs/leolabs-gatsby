import React from 'react'
import { Link } from 'gatsby'
import get from 'lodash/get'

import './layout-style.css'
import logo from './logo.svg'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`

    const siteTitle = get(this, 'props.title')
    const headerImage = get(this, 'props.header.image')

    return (
      <div>
        <header>
          {headerImage
            ? <div className={"image-header"} style={{backgroundImage: `url('${headerImage}')`}} />
            : null}

          <div className="background" style={{backgroundColor: '#2196F3'}} />

          <div className="content">
            <Link to={'/'}><img src={logo} alt="Logo" width="172" height="83" /></Link>
          </div>
        </header>

        <div className="content">
          {children}
        </div>
      </div>
    )
  }
}

export default Template
