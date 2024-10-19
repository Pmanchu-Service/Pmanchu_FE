import { theme } from "../style/theme";
import { Header } from "../components/Header";
import styled from "styled-components";
import { AddImage } from "../components/writePost/AddImage";

export const WritePostPage = () => {
  return (
    <>
      <PageContainer>
        <Header />
        <AddImage />
      </PageContainer>
    </>
  );
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`;
