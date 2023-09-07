
import "./App.css";
import styled from 'styled-components';
import Carousel from "./Carousel";

function App() {

  const Section = styled.section`
    min-height: 100vh;
    width: 100%;
    background-color: #18191A;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  `

  const Container = styled.div`
    width: 75%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;  
  `

  const Box = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  `

  const Title = styled.h2`
    font-size: 24px;
    text-transform: capitalize;
    width: 80%;
    color: wheat;
    align-self: flex-start;
    margin: 0 auto;
  `

  return (
      <Section>
        <Container>
          <Box>
            <Carousel/>
          </Box>
          <Box>
            <Title>
                Geçirdiğim En Güzel 3 Yılım
            </Title>
            <Title> Nice Senelere Aşkım</Title>
          </Box>
        </Container>
      </Section>
  );
}

export default App;
