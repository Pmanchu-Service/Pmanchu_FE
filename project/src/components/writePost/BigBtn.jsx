import { theme } from "../../style/theme";
import styled from "styled-components";

export const BigBtn = () => {
  return (
    <>
      <Button>시작하기</Button>
    </>
  );
};

const Button = styled.button`
  background-color: ${theme.color.gray[4]};
  padding: 11px 290px;
  font-size: 32px;
  border: none;
  border-radius: 10px;
  color: ${theme.color.white};
`;
