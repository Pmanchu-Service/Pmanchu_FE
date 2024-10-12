import React from "react";
import styled from "styled-components";
import { theme } from "../../style/theme";
import star from "../../assets/signupImg/mingcute_asterisk-fill.svg";

export const Input = ({ width = "100%", height = "100%", ...props }) => {
  return (
    <>
      <InputContainer>
        <TitleContainer>
          <Text>{props.text}</Text>
          <img src={star} />
        </TitleContainer>
        <StyledInput
          placeholder={props.placeholder}
          height={height}
          width={width}
        />
      </InputContainer>
    </>
  );
};

const TitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 8px;
`;
const Text = styled.p`
  font-family: "regular";
  font-size: 18px;
  color: ${theme.color.black};
`;
const InputContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin-bottom: 36px;
`;
const StyledInput = styled.input`
  width: 690px;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
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
