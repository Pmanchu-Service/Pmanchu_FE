import styled from "styled-components";
import github from "../../assets/signupImg/github-6980894_1280 1.svg";

export const LoginModal = () => {
  return (
    <>
      <ModalContainer>
        <TextBox>
          <Title>로그인</Title>
          <SubTitle>
            깃허브로 <Hlight>프만추</Hlight>에 로그인 하세요
          </SubTitle>
        </TextBox>
        <StyledButton>
          <ButtnContainer>
            <GithubImg src={github} />
            <ButtonText>github로 로그인하기</ButtonText>
          </ButtnContainer>
        </StyledButton>
      </ModalContainer>
    </>
  );
};

const GithubImg = styled.img`
  width: 53px;
  height: 47px;
`;
const ButtonText = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: white;
`;
const ButtnContainer = styled.div`
  display: flex;
  align-items: center;
`;
const StyledButton = styled.button`
  width: 452px;
  height: 60px;
  border-radius: 10px;
  background-color: #1b1f23;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 0 7px 0;
  border: none;
`;
const Hlight = styled.p`
  color: orange;
`;
const SubTitle = styled.p`
  font-size: 24px;
  font-weight: 500;
  display: flex;
`;
const Title = styled.p`
  font-size: 36px;
  font-weight: 600;
`;
const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;
const ModalContainer = styled.div`
  width: 660px;
  height: 382px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  padding: 52px 0 0 0;
  gap: 46px;
`;
