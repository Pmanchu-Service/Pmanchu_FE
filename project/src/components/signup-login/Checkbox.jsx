import { theme } from "../../style/theme";
import styled from "styled-components";

export const Checkbox = (props) => {
  return (
    <>
      <StyledDiv>
        <StyledInput type="checkbox" />
        <StyledText>{props.text}</StyledText>
      </StyledDiv>
    </>
  );
};

const StyledText = styled.p`
  font-size: 18px;
  font-weight: 400;
`;
const StyledDiv = styled.div`
  display: flex;
  align-items: center;
`;
const StyledInput = styled.input`
  width: 16px;
  height: 16px;
  accent-color: ${theme.color.main[3]};
  border-radius: 0px;
  border: 1px solid ${theme.color.black};
  margin-right: 15px;
`;
