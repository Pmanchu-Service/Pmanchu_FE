import React from "react";
import styled from "styled-components";
import { theme } from "../../style/theme";
import star from "../../assets/signup-loginImg/mingcute_asterisk-fill.svg";

export const Input = (props) => {
  return (
    <>
      <InputContainer>
        <TitleContainer>
          <Text>{props.text}</Text>
          <img src={star} alt="필수 입력" />
        </TitleContainer>
        <StyledInput placeholder={props.placeholder} />
      </InputContainer>
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
const InputContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  gap: 8px;
`;
const StyledInput = styled.input`
  width: 690px;
  height: 40px;
  border-radius: 8px;
  background-color: ${theme.color.gray[1]};
  border: 1px solid ${theme.color.gray[2]};
  padding-left: 12px;
  ::placeholder {
    font-size: 16px;
    font-weight: 400;
    color: ${theme.color.gray[5]};
  }
`;
