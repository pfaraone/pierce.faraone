import styled from "styled-components"
import { Link } from "gatsby"

export const StyledHeader = styled.header`
  margin: 2rem auto;
  width: 100%;
  color: var(--secondary);
  // border: 4px solid orange;
  line-height: var(--header-height);
  nav {
    display: flex;
    // align-items: baseline;
    margin: inherit;
    line-height: inherit;
    max-width: 960px;
    // border: 4px solid blue;
    > * {
      display: flex;
      align-items: center;
    }
  }
  .site-title {
    color: var(--primary);
    font-size: 2.5em;
    font-weight: bold;
    text-decoration: none;
    // border: 3px solid red;
    text-align: center;
    padding-top:1rem;
    paddin-bottom:0rem;
    // border: 5px solid violet;
    &:hover {
      color: rebeccapurple;
      text-decoration: underline;
    }
   
  }
`

export const Space = styled.span`
  flex-grow: 1;
  padding: 0 !important;
  // border: 4px solid orange;
`

export const NavLink = styled(Link)`
  flex-direction: column;
  justify-content: center;
  padding: 0 !important;
  position: relative;
  text-decoration: none;
  width: calc(2.5 * var(--header-padding));
  // border: 3px solid red;
  // ${props => (props.active ? "color: var(--secondary) !important;" : "")}

  span {
    display: inline-block;
    color: var(--primary);
    font-size: 0.8em;
    font-weight: bold;
    line-height: 1;
    &:hover {
      color: rebeccapurple;
      text-decoration: underline;
    }
  }
`

export const MobileNav = styled.div`
padding: 0 auto;
margin: 0 auto;
border: 3px solid red;
`