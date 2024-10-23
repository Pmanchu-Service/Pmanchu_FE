import styled from "styled-components";
import { theme } from "../style/theme";
import { Header } from "../components/Header";
import { Input } from "../components/signup/Input";
import { StuInput } from "../components/writeReport/StuInput";
import { Textarea } from "../components/signup/Textarea";
import { BigBtn } from "../components/writePost/BigBtn";

export const WriteReport = () => {
  return (
    <>
      <Header />
      <Container>
        <Title>
          <Text>프로젝트 보고서</Text>
          <StyledHr />
        </Title>
        <Sub>프로젝트</Sub>
        <Input text="이름" placeholder="프로젝트 이름을 입력하세요" />
        <Input text="팀명" placeholder="팀명을 입력하세요" />
        <StuInput />
        <Sub>개요</Sub>
        <Textarea text="프로젝트 동기" placeholder="동기를 입력하세요" />
        <Textarea text="주요 서비스" placeholder="주요 서비스를 입력하세요" />
        <Textarea text="상세 기능" placeholder="상세 기능을 입력하세요" />
        <BigBtn text="완료" />
      </Container>
    </>
  );
};

const Sub = styled.p`
  font-size: 24px;
  font-weight: 600;
  width: 690px;
`;
const StyledHr = styled.div`
  width: 690px;
  height: 0;
  border: 2px solid ${theme.color.gray[3]};
`;
const Text = styled.p`
  font-size: 32px;
  font-weight: 600;
`;
const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding: 56px 0 100px 0;
`;
