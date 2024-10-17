import React from "react";
import styled from "styled-components";
import { theme } from "../../style/theme";
import star from "../../assets/signup-loginImg/mingcute_asterisk-fill.svg";

export const Textarea = (props) => {
  return (
    <>
      <TextareaContainer>
        <TitleContainer>
          <Text>{props.text}</Text>
          <img src={star} alt="필수 입력" />
        </TitleContainer>
        <StyledTextarea placeholder={props.placeholder} cols="30" rows="5" />
      </TextareaContainer>
    </>
  );
};

const TitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;
const Text = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: ${theme.color.black};
`;
const TextareaContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  gap: 8px;
`;
const StyledTextarea = styled.textarea`
  width: 690px;
  height: 136px;
  border-radius: 8px;
  background-color: ${theme.color.gray[1]};
  border: 1px solid ${theme.color.gray[2]};
  padding-left: 12px;
  ::placeholder {
    font-size: 16px;
    font-weight: 400;
    color: ${theme.color.gray[5]};
  }
  resize: none;
  padding: 8px 0 0 12px;
`;
