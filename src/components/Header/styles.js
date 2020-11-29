import styled from "styled-components"
import { Link } from "gatsby"

export const StyledHeader = styled.header`
  // background: var(--background)
  margin: 0 15rem;
  margin-bottom: 1.45rem;
  maxwidth: 100%;
  padding: 1.5rem;
  color: var(--secondary);
  // border: 5px solid palevioletred;
  nav {
    line-height: 3;
    max-width: 100%;
    display: flex;
    align-items: flex-start;
    // border: 5px solid palevioletred;
    > * {
      display: flex;
      align-items: center;
    }
  }
  .site-title {
    // margin-left: 1.5
    padding: 1.45rem;
    color: var(--primary);
    font-size: 3em;
    font-weight: bold;
    text-decoration: none;
    &:hover {
      color: rebeccapurple;
      // border-bottom: 2px solid green;
    }
    // border: 5px solid palevioletred;
  }
`

export const Space = styled.span`
  flex-grow: 1;
  padding: 0 !important;
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
    font-size: 1.5em;
    font-weight: bold;
    line-height: 2;

    &:hover {
      color: rebeccapurple;
      text-decoration: underline;
    }
  }
`
