import "./App.css";
import Menu from "./components/Menu";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./assets/Theme";
import { useState } from "react";

const Container = styled.div`
display: flex;
`;
const Main = styled.div`
flex: 7;
background-color: #181818;
`;
const Wrapper = styled.div`
padding: 0px 15px;
`;
function App() {
  const [darkmode,setDarkmode]=useState(true)
  return (
    <ThemeProvider theme={darkmode ? darkTheme:lightTheme}>
    <Container>
      {/* Menu */}
      <Menu darkmode={darkmode} setDarkmode={setDarkmode}/>
      {/* Main */}
      <Main>
        <Navbar />
        <Wrapper>
          <h1>Video Card</h1>
          <h1>Video Card</h1>
          <h1>Video Card</h1>
          <h1>Video Card</h1>
          <h1>Video Card</h1>
          <h1>Video Card</h1>
          <h1>Video Card</h1>
          <h1>Video Card</h1>
          <h1>Video Card</h1>
          <h1>Video Card</h1>
          <h1>Video Card</h1>
          <h1>Video Card</h1>
          <h1>Video Card</h1>
          <h1>Video Card</h1>
          <h1>Video Card</h1>
          <h1>Video Card</h1>
          <h1>Video Card</h1>
          <h1>Video Card</h1>
          <h1>Video Card</h1>
          <h1>Video Card</h1>
          <h1>Video Card</h1>
          <h1>Video Card</h1>
          <h1>Video Card</h1>
          <h1>Video Card</h1>
          <h1>Video Card</h1>
          <h1>Video Card</h1>
          <h1>Video Card</h1>
          <h1>Video Card</h1>
          <h1>Video Card</h1>
          <h1>Video Card</h1>
        </Wrapper>
      </Main>
    </Container>
    </ThemeProvider>
  );
}

export default App;
