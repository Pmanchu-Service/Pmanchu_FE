import { Header } from '../components/Header';
import { PostUser } from '../components/checkpost/PostUser';
import styled from 'styled-components';
import Heart from '../assets/projectformpage/heart-fill.svg';


export const CheckPostPage = () => {
  return (
    <>
      <Header />
      <ContainerBox>
      <Container>
        <PostUser />
      </Container>
      </ContainerBox>
    </>
  );
}

const Container = styled.div`
  width: 80%;
  height: calc(100vh - 64px);
  display: flex;
  flex-direction: column;
`;

const ContainerBox = styled.div`
  padding-top: 30px;
  display: flex;
  justify-content: center;
` 