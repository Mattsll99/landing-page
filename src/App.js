import styled from "styled-components"
import './App.css';
import Header from './components/Header';
import FirstPage from "./components/FirstPage"
import SecondPage from "./components/SecondPage";
import ThirdPage from "./components/ThirdPage";
import FourthPage from "./components/FourthPage";

function App() {
  return (
    <Container>
      <Header />
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
    </Container>
  );
}

export default App;

const Container = styled.div`
`;