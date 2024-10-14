import styled from 'styled-components';
import { Header } from '../components/Header';

export const PlanPage = () => {
  return (
    <>
      <Header />
      <Container>
        
      </Container>
    </>
  );
}


const Container = styled.div`
  width: 40%;
  height: calc(100vh - 64px);
  margin: 0 auto;
  border: 0.1px solid black;
`;