import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import get from 'lodash/get'

import './layout-style.css'
import logo from './logo.svg'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`

    const headerImage = get(this, 'props.header.image')
    const headerColor = get(this, 'props.header.color')

    return (
      <div>
        <Helmet>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#2196F3" />
          <meta name="msapplication-TileColor" content="#2196F3" />
          <meta name="theme-color" content={headerColor || '#2196F3'} />

          <meta name="twitter:card" value="summary" />
          <meta name="twitter:site" content="@leolabs_org" />
          <meta name="twitter:creator" content="@leolabs_org" />
          <meta property="og:site_name" content="leolabs.org" />
        </Helmet>

        <header>
          {headerImage
            ? <div className={"image-header"} style={{backgroundImage: `url('${headerImage}')`}} />
            : null}

          <div className="background" style={{backgroundColor: headerColor || '#2196F3'}} />

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
