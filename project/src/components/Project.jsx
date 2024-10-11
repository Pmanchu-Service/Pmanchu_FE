import styled from "styled-components"
import { ReactComponent as Like } from "../assets/mainpage/likeBtn.svg"
import { ReactComponent as Liked } from "../assets/mainpage/likedBtn.svg"
import { useState } from "react"

export const Project = () => {

  const [isLike, setIsLike] = useState(false);

  return(
    <Container>
      <ProjectImgCover/>
      <Group>
        <TitleBox>
          <Title>프로젝트에서 ...</Title>
          <Text>김이박</Text>
        </TitleBox>
        <LikeBox>
          { isLike ? (<Liked/>) : (<Like/>) }
          100 {/*나중에 데이터로 바꿈 */}
        </LikeBox>
      </Group>
    </Container>
  )
}

const Container = styled.div`
width: 340px;
height: 272px;
`

const ProjectImgCover = styled.div`
width: 340px;
height: 220px;
background: #AAAAAA;
border-radius: 5px;
`

const Group = styled.div`
width: 340px;
height: 52px;
display: flex;
justify-content: space-between;
padding-top: 13px;
padding-right: 13.5px;
box-sizing: border-box;
`

const TitleBox = styled.div`
  display: flex;
  align-items: flex-end;
  margin: 20px 0 0;
  gap: 20px;
`

const Title = styled.p`
font-weight: 700;
font-size: 20px;
line-height: 32px;
color: #000000;
margin: 0;
`

const Text = styled.p`
font-weight: 500;
font-size: 16px;
line-height: 26px;
color: #000000;
margin: 0;
`

const LikeBox = styled.div`
font-weight: 500;
font-size: 12px;
color: #000;
display: flex;
flex-direction: column;
`
