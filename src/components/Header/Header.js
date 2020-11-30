import { Link } from "gatsby"
import Img from "gatsby-image" // highlight-line
import PropTypes from "prop-types"
import React from "react"

import { GitHubIcon, LinkedInIcon, AdobeAcrobatIcon } from "../../assets/"
import { linkedin, googledocsresume, github } from "../../links"

import { StyledHeader, Space, NavLink } from "./styles"

const Header = ({ activePage, siteTitle }) => (
  <StyledHeader>
    <nav>
      <Link to="/" className="site-title">
        {siteTitle}
      </Link>
      <Space />
      <NavLink to={linkedin} target="_blank">
        <LinkedInIcon
          style={{
            maxWidth: `3.0em`,
            maxHeight: `3.0em`,
            marginTop: `1em`,
            marginBottom: `1em`,
          }}
        />
        <span>LinkedIn</span>
      </NavLink>
      <NavLink to={github} target="_blank">
        <GitHubIcon
          style={{
            maxWidth: `3.0em`,
            maxHeight: `3.0em`,
            marginTop: `1em`,
            marginBottom: `1em`,
          }}
        />
        <span>GitHub</span>
      </NavLink>
      <NavLink to={googledocsresume} target="_blank">
        <AdobeAcrobatIcon
          style={{
            maxWidth: `3.0em`,
            maxHeight: `3.0em`,
            marginTop: `1em`,
            marginBottom: `1em`,
          }}
        />
        <span>Resume</span>
      </NavLink>
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
