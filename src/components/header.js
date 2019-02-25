import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#890620`,
      margin: `0 auto`,
      padding: `1.45rem 1.0875rem`,
    }}
  >
    <div
      style={{
        maxWidth: 960,
      }}
    >
      <h1 style={{ margin: 0, postition: 'fixed' }}>
        <Link
          to="/"
          style={{
            color: `#F8F6F7`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
