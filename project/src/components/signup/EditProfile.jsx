import styled from "styled-components";
import { theme } from "../../style/theme";
import pen from "../../assets/signupImg/ri_pencil-fill.svg";

export const EditProfile = () => {
  return (
    <>
      <Cover>
        <Profile />
      </Cover>
    </>
  );
};

const Cover = styled.div`
  :hover {
    filter: brightness(80%);
  }
`;
const Profile = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 60px;
  border: none;
  background-color: ${theme.color.main[3]};
  background-image: url(${pen});
  background-repeat: no-repeat;
  background-position: center center;
`;
