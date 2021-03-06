import Router from "./components/Router";
import Footer from "./components/Footer/Footer";
import styled from "styled-components";
import imageBack from "./assets/background1.jpg";
import "./App.css";

const DivMain = styled.div`
  background: url(${imageBack}) #444;
  background-size: cover;
`;

function App() {
  return (
    <div>
      <DivMain>
        <Router />
      </DivMain>
      <Footer />
    </div>
  );
}

export default App;
