import React from "react";
import { WEIGHTS } from "../../constants";
import styled from "styled-components";

const Logo = ({className}) => {
  return (
    <Link className={className} href="/">
      <Wrapper>Sole&amp;Ankle</Wrapper>
    </Link>
  );
};

const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;

const Wrapper = styled.h1`
    font-size: 1.5rem;
    font-weight: ${WEIGHTS.bold};
`

export default Logo;
