import React from "react";
import styled from "styled-components";
import Select from "../select/Select";
import { WEIGHTS } from "../../constants";
import Breadcrumbs from "../breadcrumbs/Breadcrumbs";
import Spacer from "../spacer/Spacer";
import Sidebar from "../sidebar/Sidebar";
import ShoeGrid from "../shoeGrid/ShoeGrid";

const ShoeIndex = ({ sortId, setSortId }) => {
  return (
    <Wrapper>
      <MainColumn>
        <Header>
          <Title>Running</Title>
          <Select
            label="Sort"
            value={sortId}
            onChange={(ev) => setSortId(ev.target.value)}
          >
            <option value="newest">Newest Releases</option>
            <option value="price">Price</option>
          </Select>
        </Header>
        <Spacer size={32} />
        <ShoeGrid />
      </MainColumn>
      <LeftColumn>
        <Breadcrumbs>
          <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale/shoes">Shoes</Breadcrumbs.Crumb>
        </Breadcrumbs>
        <Spacer size={32} />
        <Sidebar/>
      </LeftColumn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 32px;
  flex-direction: row-reverse;
`;

const MainColumn = styled.div`
  flex: 1;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  height: 42px;
  align-items: center;
`;
const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.medium};
`;

const LeftColumn = styled.div`
  width: 248px;
`;

export default ShoeIndex;
