import { Header } from '../components/Header';
import { PostUser_master } from '../components/checkpost/PostUser_master';
import styled from 'styled-components';


export const CheckPostPage_master = () => {
  return (
    <>
      <Header />
      <ContainerBox>
      <Container>
        <PostUser_master />
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