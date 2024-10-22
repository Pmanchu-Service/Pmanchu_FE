import { theme } from "../../style/theme";
import styled from "styled-components";

export const BigBtn = ({ text }) => {
  return (
    <>
      <Button>{text}</Button>
    </>
  );
};

const Button = styled.button`
  background-color: ${theme.color.gray[4]};
  padding: 11px 0 11px 0;
  width: 690px;
  font-size: 32px;
  border: none;
  border-radius: 10px;
  color: ${theme.color.white};
`;
