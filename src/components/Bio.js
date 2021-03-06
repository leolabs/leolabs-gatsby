import React from 'react'

import avatar from './avatar.jpg'

class Bio extends React.Component {
  socialMedia = [
    {name: 'Twitter', link: 'https://twitter.com/leolabs_org'},
    {name: 'GitHub', link: 'https://github.com/leolabs'},
    {name: '500px', link: 'https://500px.com/leolabs'},
    {name: 'Spotify', link: 'https://open.spotify.com/user/leolabs'}
  ]

  render() {
    return (
      <div className="bio">
        <img
          src={avatar}
          alt='Leo Bernard'
        />
        <div>
          <p>Hey there! My name is Leo Bernard. I'm a Stu­dent, Mu­si­cian and De­vel­oper. I love Pho­tog­ra­phy, Movies, Com­put­ers, Mu­sic and Cats.</p>

          <ul>
            {this.socialMedia.map(s =>
              <li key={s.name}><a href={s.link} title={s.name}>{s.name}</a></li>
            )}
          </ul>
        </div>
      </div>
    )
  }
}

export default Bio
