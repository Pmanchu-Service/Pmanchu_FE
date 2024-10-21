import styled from "styled-components";
import { theme } from "../../style/theme";
import cam from "../../assets/writePostImg/ph_camera.svg";

export const AddImage = () => {
  return (
    <>
      <StyledContainer />
    </>
  );
};

const StyledContainer = styled.div`
  width: 152px;
  height: 152px;
  border: 3px solid ${theme.color.gray[3]};
  background-color: ${theme.color.white};
  background-image: url(${cam});
  background-repeat: no-repeat;
  background-position: center center;
  cursor: pointer;
  :hover {
    background-color: ${theme.color.gray[6]};
  }
`;
