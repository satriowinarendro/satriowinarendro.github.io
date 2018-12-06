import React from 'react'
import { Link } from 'gatsby'

class Header extends React.Component {
  render() {
    return (
      <div>
        <Link to='/blog'>Blog</Link>
      </div>
    )
  }
}

export default Header
