import { Link } from "gatsby"
import Img from "gatsby-image" // highlight-line
import PropTypes from "prop-types"
import React from "react"

import { GitHubIcon, LinkedInIcon, AdobeAcrobatIcon } from "../../assets/"
import { linkedin, googledocsresume, github } from "../../links"

import { StyledHeader, Space, NavLink } from "./styles"
import StyledIcon from "../Icon"


const Header = ({ activePage, siteTitle }) => (
  <StyledHeader>
    <nav>
      <Link to="/" className="site-title">
        {siteTitle}
      </Link>
      <Space />
      <NavLink to={linkedin} target="_blank">
        <StyledIcon name="LinkedInIcon"/>
        <span>LinkedIn</span>
      </NavLink>
      <NavLink to={github} target="_blank">
      <StyledIcon name="GitHubIcon"/>
        <span>GitHub</span>
      </NavLink>
      <NavLink to={googledocsresume} target="_blank">
      <StyledIcon name="AdobeAcrobatIcon"/>
        <span>Resume</span>
      </NavLink>
    </nav>
  </StyledHeader>
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
