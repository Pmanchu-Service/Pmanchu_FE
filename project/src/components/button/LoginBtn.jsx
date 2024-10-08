import styled from "styled-components"

export const LoginBtn = () => {
  return(
    <Container>
      <Text>로그인</Text>
    </Container>
  )
}

const Container = styled.button`
width: 100px;
height: 40px;
background: #ABD794;
border-radius: 5px;
border: none;
display: flex;
justify-content: center;
align-items: center;
`

const Text = styled.p`
font-weight: 600;
font-size: 16px;
line-height: 19px;
color: #FFFFFF;
`