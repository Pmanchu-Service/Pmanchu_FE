import React from "react";
import styled from "styled-components";
import { theme } from "../../style/theme";
import star from "../../assets/signupImg/mingcute_asterisk-fill.svg";
import plus from "../../assets/signupImg/ic_round-plus.svg";

export const Input = ({ placeholder, text, type }) => {
  return (
    <>
      <InputContainer type={type}>
        <TitleContainer>
          <Text>{text}</Text>
          <img src={star} alt="필수 입력" />
        </TitleContainer>
        <StyledContent>
          <StyledInput placeholder={placeholder} />
          {type === "plus" && <PlusBtn />}
        </StyledContent>
      </InputContainer>
    </>
  );
};

const StyledContent = styled.div`
  width: 690px;
  display: flex;
  gap: 12px;
`;
const PlusBtn = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 4px;
  border: none;
  background-color: ${theme.color.gray[4]};
  background-image: url(${plus});
  background-position: center center;
  cursor: pointer;
`;
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
  width: 100%;
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
