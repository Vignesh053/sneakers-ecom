import React from "react";
import { Search } from "react-feather";
import styled from "styled-components";
import { COLORS } from "../../constants";

const SearchBar = () => {
  return (
    <Label htmlFor="search">
      <SearchIcon  strokeWidth={2} />
      <SearchInput type="text" id="search" placeholder="Search" />
    </Label>
  );
};

const Label = styled.label`
  position: relative;
`;


const SearchInput = styled.input`
  border: none;
  background: transparent;
  border-bottom: 1px solid ${COLORS.gray[300]};
  padding-left: 24px;
  font-size: 0.875rem;
  color: ${COLORS.gray[100]};
  outline-offset: 4px;

  &::placeholder {
    color: ${COLORS.gray[500]};
  }
`;

const SearchIcon = styled(Search)`
    position: absolute;
    left: 0;
    top: 0;
    
    bottom: 0;
    margin: auto;
    width: 16px;
    height: 16px;
`

export default SearchBar;
