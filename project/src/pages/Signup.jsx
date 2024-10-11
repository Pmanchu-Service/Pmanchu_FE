import React from "react";
import styled from "styled-components";
import { Input } from "../components/signup/Input";
import { theme } from "../style/theme";
import { Profile } from "../components/signup/Profile";
import { PlusInput } from "../components/signup/PlusInput";

export const Signup = () => {
  return (
    <>
      <Container>
        <StyledDiv>
          <Title>회원가입</Title>
          <Subtitle>정보를 입력해주세요!</Subtitle>
        </StyledDiv>
        <Profile />
        <Input
          text="이름(본명)"
          height="40px"
          width="690px"
          placeholder="이름을 입력하세요"
        />
        <PlusInput />
      </Container>
    </>
  );
};

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 32px;
`;
const Subtitle = styled.p`
  font-size: 24px;
  font-weight: 500;
  display: block;
  line-height: 34px;
`;
const Title = styled.p`
  font-size: 36px;
  line-height: 57px;
  font-weight: 600;
  display: block;
  margin-bottom: 8px;
`;
const Container = styled.div`
  width: 100vw;
  height: 100vw;
  padding: 52px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
