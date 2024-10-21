import styled from "styled-components";
import { LoginModal } from "../components/signup/LoginModal";

export const LoginPage = () => {
  return (
    <>
      <PageContainer>
        <LoginModal />
      </PageContainer>
    </>
  );
};

const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(158, 158, 158, 50%);
`;
