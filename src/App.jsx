import SuperHeader from "./components/superHeader/SuperHeader";

import GlobalStyles from './components/GlobalStyles/GlobalStyles.jsx'
import Header from "./components/header/Header.jsx";
import ShoeIndex from "./components/shoeIndex/ShoeIndex.jsx";
import { useState } from "react";
import styled from "styled-components";
function App() {
  const [sortId, setSortId] = useState('newest');
  return (
    <>
      <GlobalStyles />
      <Header />
      <Main>
      <ShoeIndex  sortId={sortId} setSortId={setSortId}/>
      </Main>
    </>
  );
}

const Main = styled.main`
  padding: 64px 32px;
`

export default App;
