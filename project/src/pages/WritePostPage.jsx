import { theme } from "../style/theme";
import { Header } from "../components/Header";
import styled from "styled-components";
import { AddImage } from "../components/writePost/AddImage";
import { Input } from "../components/signup/Input";
import { Textarea } from "../components/signup/Textarea";
import { SmallBtn } from "../components/writePost/SmallBtn";
import { Date } from "../components/writePost/Date";
import { Majors } from "../components/writePost/Majors";
import { Stack } from "../components/writePost/Stack";

export const WritePostPage = () => {
  return (
    <>
      <PageContainer>
        <StyledDiv>
          <Header />
          <AddImage />
        </StyledDiv>
        <Input text="프로젝트 이름" placeholder="프로젝트 이름을 입력하세요" />
        <Input text="주제" placeholder="주제를 입력하세요" />
        <Textarea text="구상안" placeholder="구상안을 입력하세요" />
        <SmallBtn />
        <Date text="모집 기간" />
        <Date text="진행 기간" />
        <Majors />
        <Stack />
      </PageContainer>
    </>
  );
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  gap: 40px;
`;
const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 96px;
`;
