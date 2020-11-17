import styled from "styled-components"
import { Link } from "gatsby"

export const StyledHeader = styled.header`
  background: rebeccapurple;
  margin: 0 auto;
  margin-bottom: 1.45rem;
  maxwidth: 100%;
  padding: 1.45rem 1.0875rem;
  color: #fff;
  border: 5px solid palevioletred;
  nav {
    line-height: inherit;
    max-width: 100%;
    display: flex;
    align-items: flex-start;
    border: 5px solid palevioletred;
    // > * {
    //   display: flex;
    //

    //   padding: 1rem;
    // }
  }
  .site-title {
    padding: 1.45rem 1.0875rem;
    color: yellow;
    font-size: 22px;
    text-decoration: none;
    border: 5px solid palevioletred;

    svg {
      border: 1px solid var(--primary);
      border-radius: 50%;
      fill: var(--primary);
      margin-right: 1rem;
    }
  }
`
