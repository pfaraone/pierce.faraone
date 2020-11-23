import styled from "styled-components"
import { Link } from "gatsby"

export const StyledHeader = styled.header`
  background: var(--primary);
  margin: 0 auto;
  margin-bottom: 1.45rem;
  maxwidth: 100%;
  padding: 1.45rem 1.0875rem;
  color: var(--secondary);
  // border: 5px solid palevioletred;
  nav {
    line-height: inherit;
    max-width: 100%;
    display: flex;
    align-items: flex-start;
    // border: 5px solid palevioletred;
    > * {
      display: flex;
      align-items: center;
      padding: 1rem;
    }
  }
  .site-title {
    // margin-left: 1.5
    padding: 1.45rem 1.0875rem;
    color: blue;
    font-size: 22px;
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
  // border: 5px solid yellow;

  a & {
    min-width: 1rem;
  }
`

export const NavLink = styled(Link)`
  flex-direction: column;
  justify-content: center;
  margin-left: 1rem;
  padding: 0 !important;
  position: relative;
  text-decoration: none;
  width: calc(3 * var(--header-padding));
  // border: 3px solid red;
  // ${props => (props.active ? "color: var(--secondary) !important;" : "")}
  span {
    display: inline-block;
    color: var(--secondary)
    font-size: 1.5em;
    font-weight: bold;

    line-height: 1;
    // padding-right: 1rem;
    // margin-right: 1rem;
    &.active,
    &:hover {
      color: rebeccapurple;
      text-decoration: underline;
      // border-bottom: 2px solid green;
    }
  }
`
