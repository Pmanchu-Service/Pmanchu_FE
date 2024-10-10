import styled from "styled-components";
import React from "react";
import { theme } from "../../style/theme";
import dumpling from "../../assets/signupImg/fluent-emoji-flat_dumpling.svg";

export const Profile = () => {
  return (
    <>
      <StyledDiv>
        <img src={dumpling} />
      </StyledDiv>
    </>
  );
};

const StyledDiv = styled.div`
  width: 152px;
  height: 152px;
  border-radius: 500px;
  border: 5px solid ${theme.color.main[4]};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 48px;
`;
