import React from "react"
import styled from "styled-components"

import { StyledFooter } from "./styles"
const year = new Date().getFullYear()
const Footer = () => (
  <StyledFooter>
    © {year}, Built with
    {` `}
    <a href="https://www.gatsbyjs.com">Gatsby</a>
  </StyledFooter>
)

export default Footer
