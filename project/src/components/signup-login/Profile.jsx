import styled from "styled-components";
import React from "react";
import { theme } from "../../style/theme";
import dumpling from "../../assets/signup-loginImg/fluent-emoji-flat_dumpling.svg";

export const Profile = () => {
  return (
    <>
      <Cover>
        <StyledDiv />
      </Cover>
    </>
  );
};

const Cover = styled.div`
  :hover {
    filter: brightness(70%);
  }
`;
const StyledDiv = styled.div`
  width: 152px;
  height: 152px;
  border-radius: 76px;
  border: 5px solid ${theme.color.main[4]};
  background-image: url(${dumpling});
  background-color: ${theme.color.white};
`;
