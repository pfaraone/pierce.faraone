import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { StyledHeader } from "./styles"

const Header = ({ activePage, siteTitle }) => (
  <StyledHeader>
    <nav>
      <Link to="/" className="site-title">
        {siteTitle}
      </Link>
      {/* TODO: add link to resume */}
      {/* <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          // padding: `1.45rem 1.0875rem`,
          borderStyle: `1px solid`,
        }}
      >
        <h1>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </div> */}
    </nav>
  </StyledHeader>
  // <header
  //   style={{
  //     background: `green`,
  //     marginBottom: `1.45rem`,
  //   }}
  // >
  //
  //
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
