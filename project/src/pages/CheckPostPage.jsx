import { Header } from '../components/Header';
import { PostUser } from '../components/checkpost/PostUser';
import styled from 'styled-components';

export const CheckPostPage = () => {
  return (
    <>
      <Header />
      <Container>
        <PostUser />
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`;