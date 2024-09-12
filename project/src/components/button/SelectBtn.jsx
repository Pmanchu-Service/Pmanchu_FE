import styled from "styled-components";
import { theme } from "../../style/theme";

export const SelectBtn = () => {
  return <BtnContainer>선택하기</BtnContainer>;
};

const BtnContainer = styled.button`
  cursor: pointer;
  width: 220px;
  height: 60px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 32px;
  color: ${theme.color.white};
  background-color: ${theme.color.main[2]};
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  &:active {
    outline: none;
  }
`;
