import React from "react";
import styled from "styled-components";
import { theme } from "../style/theme";
import star from "../assets/mingcute_asterisk-fill.svg";

export const Input = (props) => {
  return (
    <>
      <InputContainer>
        <TitleContainer>
          <Text>{props.text}</Text>
        </TitleContainer>
        <StyledInput />
      </InputContainer>
    </>
  );
};

const TitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  float: left;
  background: url(${star});
`;
const Text = styled.p`
  font-family: "regular";
  font-size: 20px;
  color: ${theme.color.black};
`;
const InputContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;
const StyledInput = styled.input`
  width: 690px;
  height: 40px;
  background-color: ${theme.color.gray[1]};
  border: 1px solid ${theme.color.gray[2]};
`;
