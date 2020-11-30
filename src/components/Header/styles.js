import styled from "styled-components"
import { Link } from "gatsby"

export const StyledHeader = styled.header`
  // background: var(--background)
  margin: 0 auto;
  margin-bottom: 1.45rem;
  width: 100%;
  // padding: 1.5rem 0rem;
  color: var(--secondary);
  // border: 5px solid palevioletred;
  nav {
    margin: 0 auto;
    line-height: 4;
    max-width: 960px;
    display: flex;
    align-items: flex-start;
    // border: 5px solid green;
    > * {
      display: flex;
      align-items: center;
    }
  }
  .site-title {
    color: var(--primary);
    font-size: 3em;
    font-weight: bold;
    text-decoration: none;
    // border: 5px solid orange;
    &:hover {
      color: rebeccapurple;
      text-decoration: underline;
    }
   
  }
`

export const Space = styled.span`
  flex-grow: 1;
  padding: 0 !important;
  // border: 5px solid orange;
  a & {
    min-width: 1rem;
  }
`

export const NavLink = styled(Link)`
  flex-direction: column;
  justify-content: center;
  // margin-left: 1rem;
  margin-top: 1.5rem;
  padding: 0 !important;
  position: relative;
  text-decoration: none;
  width: calc(4 * var(--header-padding));
  // border: 3px solid red;
  // ${props => (props.active ? "color: var(--secondary) !important;" : "")}
  span {
    display: inline-block;
    color: var(--primary);
    font-size: 1.2em;
    font-weight: bold;
    line-height: 1;

    &:hover {
      color: rebeccapurple;
      text-decoration: underline;
    }
  }
`
