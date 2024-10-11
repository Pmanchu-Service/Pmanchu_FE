import styled from "styled-components";
import { Header } from "../components/Header";
import { Project } from "../components/Project";
import { ReactComponent as  CategoryBtn} from "../assets/mainpage/CategoryBtn.svg"
import { ReactComponent as  BottomArrow} from "../assets/mainpage/bottomArrow.svg"

export const MainPage = () => {
  return(
    <div>
      <Header/>
      <Main>
        <Container>
          <LankBox>
            <Lanking>1위</Lanking>
            <Title>프로젝트에서 만남을 추구하면 안되는걸까</Title>
          </LankBox>
          <Selection>
            <CategoryBtn/>
            인기프로젝트
            <BottomArrow/>
          </Selection>
          <ProjectsBox>
            <Project/>
            <Project/>
            <Project/>
            <Project/>
            <Project/>
            <Project/>
          </ProjectsBox>
        </Container>
      </Main>
    </div>
  );
};

const Container = styled.div`
  width: 1140px;
  display: flex;
  flex-direction: column;
  gap: 56px;
`

const LankBox = styled.div`
width: 1140px;
height: 76px;
background: #FFBD22;
border-radius: 10px;
color: #fff;
display: flex;
box-sizing: border-box;
align-items: center;
padding-left: 36px;
gap: 40px;
`

const Lanking = styled.p`
font-weight: 600;
font-size: 32px;
line-height: 42px;
margin: 0;
`

const Title = styled.p`
font-weight: 700;
font-size: 20px;
line-height: 32px;
margin: 0;
`

const Selection = styled.div`
width: 159px;
height: 40px;
background: #FFBD22;
border-radius: 5px;
color: #fff;
box-sizing: border-box;
color: #fff;
font-size: 16px;
font-weight: 600;
display: flex;
align-items: center;
justify-content: center;
gap: 4px;
`

const ProjectsBox = styled.div`
width: 1140px;
display: flex;
flex-wrap: wrap;
row-gap: 56px;
column-gap: 60px;
box-sizing: border-box;
`

const Main = styled.div`
height: calc(100vh - 64px);
width: 100vw;
padding: 84px 390px 104px;
box-sizing: border-box;
`