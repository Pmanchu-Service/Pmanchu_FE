import React from "react";
import styled from "styled-components";
import { Input } from "../components/signup/Input";
import { SelectMjr } from "../components/signup/SelectMjr";
import { SelectGrade } from "../components/signup/SelectGrade";
import { Textarea } from "../components/signup/Textarea";
import { Header } from "../components/Header";
import { BigBtn } from "../components/writePost/BigBtn";
import { EditProfile } from "../components/signup/EditProfile";

export const EditUserInfo = () => {
  return (
    <>
      <Container>
        <StyledDiv>
          <Header />
          <EditProfile />
        </StyledDiv>

        <Input text="이름(본명)" placeholder="이름을 입력하세요" />
        <Input
          type={"plus"}
          text="기술스택"
          placeholder="기술스택을 입력하세요"
        />
        <SelectMjr />
        <SelectGrade />
        <Textarea text="자기소개" placeholder="자기소개를 입력하세요" />
        <Input
          text="한 줄 자기소개"
          placeholder="간단한 자기소개를 입력하세요"
        />
        <Input
          text="연락처"
          placeholder="인스타 아이디 또는 페이스북 아이디를 입력하세요"
        />
        <Input type={"plus"} text="링크" placeholder="링크를 입력하세요" />
        <BigBtn text="수정하기" />
      </Container>
    </>
  );
};

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 68px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 36px;
`;
