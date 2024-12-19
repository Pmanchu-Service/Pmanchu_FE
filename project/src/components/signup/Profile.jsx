import styled from "styled-components";
import React from "react";
import { theme } from "../../style/theme";
import dumpling from "../../assets/signupImg/fluent-emoji-flat_dumpling.svg";
import write from "../../assets/signupImg/ri_pencil-fill.svg";

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
  position: relative;

  :hover::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url(${write}); /* 주석 처리된 하얀 이미지 경로 */
    background-size: 72px 72px;
    background-repeat: no-repeat;
    background-position: center;
    background-color: rgba(158, 158, 158, 0.5);
    border-radius: 76px;
    opacity: 1;
  }
`;

const StyledDiv = styled.div`
  width: 152px;
  height: 152px;
  border-radius: 76px;
  border: 5px solid ${theme.color.main[4]};
  background-image: url(${dumpling});
  background-color: ${theme.color.white};
  position: relative;
`;
