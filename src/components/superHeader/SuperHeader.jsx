import React from 'react'
import { ShoppingBag } from 'react-feather'
import styled from 'styled-components'
import { COLORS } from '../../constants'
import SearchBar from '../searchBar/SearchBar'

const SuperHeader = () => {
  return (
    <Wrapper>
        <MarketingText>
        Free shipping on domestic orders over $75!
        </MarketingText>
        <SearchBar />
        <HelpLink href="#">Help</HelpLink>
        <ShoppingBag strokeWidth={1} />

    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 8px 32px;
  font-weight: 500;
  background-color: ${COLORS.gray[900]};
  color: ${COLORS.gray[300]};
  display: flex;
  gap: 24px;
  font-size: 0.875rem;
  align-items: center;
`

const MarketingText = styled.div`
  color: ${COLORS.white};
  
  margin-right: auto;
`

const HelpLink = styled.a`
  color: inherit;
  text-decoration: none;

`


export default SuperHeader