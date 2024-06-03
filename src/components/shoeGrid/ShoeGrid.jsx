import React from 'react'
import styled from 'styled-components'
import SHOES from '../../data'
import ShoeCard from '../shoeCard/ShoeCard'

const ShoeGrid = () => {
    
  return (
    <Wrapper>
      {SHOES.map((shoe) => (
        <ShoeCardWrapper>
        <ShoeCard key={shoe.slug} {...shoe} />
        </ShoeCardWrapper>
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
    display: flex;
    
    flex-wrap: wrap;
    gap: 32px;
`

const ShoeCardWrapper = styled.div`
    min-width: 275px;
    max-width: 344px;
    flex: 1;
    padding: 0px 2px;
    
`

export default ShoeGrid