import styled from "styled-components";

export const CreateProjectBtn = () => {
  return(
    <Container>
      <Text>프로젝트 생성</Text>
    </Container>
  )
}

const Container = styled.button`
  width: 136px;
  height: 36px;
  background: #ABD794;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.p`
font-weight: 600;
font-size: 16px;
line-height: 19px;
color: #FFFFFF;
`