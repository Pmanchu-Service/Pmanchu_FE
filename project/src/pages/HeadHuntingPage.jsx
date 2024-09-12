import styled from "styled-components";
import { HeadHuntingModal } from "../components/headHunting/HeadHuntingModal";

export const HeadHuntingPage = () => {
  return (
    <PageContainer>
      <HeadHuntingModal />
    </PageContainer>
  );
};

const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(158, 158, 158, 0.5);
`;
