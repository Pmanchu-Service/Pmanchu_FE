import styled from "styled-components"
import { PageTitle } from "../components/title/PageTitle"
import { Header } from "../components/Header"
import { NoneComponent } from "../components/none/NoneComponent"
import { useState } from "react"
import { Project } from "../components/mypage/Project"

export const LikedProjectsPage = () => {

  const [isNull, setIsNull] = useState(false);

  return (
    <>
      <Header/>
      <Contariner>
        <PageTitle title={'좋아요 표시한 게시글'}/>
        <MainContentBox isNull={isNull} >
          {isNull ?
            <NoneComponent title={'좋아요가 없습니다...'} />
            : 
            <>
              <Project title={'프만추'} content={123}/>
              <Project title={'프만추'} content={123}/>
              <Project title={'프만추'} content={123}/>
              <Project title={'프만추'} content={123}/>
              <Project title={'프만추'} content={123}/>
              <Project title={'프만추'} content={123}/>
              <Project title={'프만추'} content={123}/>
              <Project title={'프만추'} content={123}/>
              <Project title={'프만추'} content={123}/>
              <Project title={'프만추'} content={123}/>
              <Project title={'프만추'} content={123}/>
              <Project title={'프만추'} content={123}/>
              <Project title={'프만추'} content={123}/>
              <Project title={'프만추'} content={123}/>
            </>
          }
        </MainContentBox>
      </Contariner>
    </>
  )
}

const Contariner = styled.div`
  width: 100vw;
  height: calc(100vh - 64px);
  display: flex;
  flex-direction: column;
  align-items: center;
`

const MainContentBox = styled.div`
  width: 100vw;
  height: calc(100vh - 194px);
  display: flex;
  padding-top: ${props => props.isNull ? '194px' : '40px'};
  padding-bottom: 40px;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`