import React from "react";
import styled from "styled-components";
import { theme } from "../style/theme";
import star from "../assets/mingcute_asterisk-fill.svg";

export const Input = ({ height = "100%", ...props }) => {
  return (
    <>
      <InputContainer>
        <TitleContainer>
          <Text>{props.text}</Text>
          <StyledImg src={star} />
        </TitleContainer>
        <StyledInput placeholder={props.placeholder} height={height} />
      </InputContainer>
    </>
  );
};

const StyledImg = styled.img``;
const TitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 87px;
  height: 28px;
  margin-bottom: 8px;
`;
const Text = styled.p`
  font-family: "regular";
  font-size: 20px;
  color: ${theme.color.black};
`;
const InputContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;
const StyledInput = styled.input`
  width: 690px;
  height: ${({ height }) => height};
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
