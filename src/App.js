import "./App.css";
import Menu from "./components/Menu";
import styled from "styled-components";
import Navbar from "./components/Navbar";

const Container = styled.div`
display: flex;
`;
const Main = styled.div`
flex: 7;
`;
const Wrapper = styled.div``;
function App() {
  return (
    <Container>
      {/* Menu */}
      <Menu />
      {/* Main */}
      <Main>
        <Navbar />
        <Wrapper>
          video cards
        </Wrapper>
      </Main>
    </Container>
  );
}

export default App;
