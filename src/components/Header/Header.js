import { Link } from "gatsby"
import Img from "gatsby-image" // highlight-line
import PropTypes from "prop-types"
import React from "react"
// import GatsbyIcon from "../../images/gatsby-icon.png"
import PierceFaraoneResume from "../../../static/Pierce_Faraone_Resume.pdf"
import AdobeAcrobatIcon from "../../assets/iconmonstr-file-36.svg"
import LinkedInIcon from "../../assets/iconmonstr-linkedin-3.svg"
import { linkedin, dropboxresume } from "../../links"

import { StyledHeader, Space, NavLink } from "./styles"

const Header = ({ activePage, siteTitle }) => (
  <StyledHeader>
    <nav>
      <Link to="/" className="site-title">
        {siteTitle}
      </Link>
      <Space />
      <NavLink to={dropboxresume} target="_blank">
        <AdobeAcrobatIcon
          style={{
            maxWidth: `3em`,
            maxHeight: `3em`,
            marginBottom: `1em`,
          }}
        />
        <span>Resume</span>
      </NavLink>
      <NavLink to={linkedin} target="_blank">
        <LinkedInIcon
          style={{
            maxWidth: `3em`,
            maxHeight: `3em`,
            marginBottom: `1em`,
          }}
        />
        <span>LinkedIn</span>
      </NavLink>
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

/**
 * const myQuery = graphql`
    query {
        nameOfImage: file(relativePath: { eq: "relativePathToYourImage.png" }) {
            childImageSharp {
                fixed(height: 200) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }
`
 */

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
