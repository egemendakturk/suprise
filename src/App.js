
import "./App.css";
import styled from 'styled-components';

function App() {

  const Section = styled.section`
    min-height: 100vh;
    width: 100%;
    background-color: grey;
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

  return (
      <Section>
        <Container>
          <Box>
            carousel
          </Box>
          <Box>
            text
          </Box>
        </Container>
      </Section>
  );
}

export default App;
