import styled from "styled-components"
import { PageTitle } from "../components/title/PageTitle"
import { Header } from "../components/Header"
import { NoneComponent } from "../components/none/NoneComponent"

export const LikedProjectsPage = () => {
  return (
    <>
      <Header/>
      <Contariner>
        <PageTitle title={'좋아요 표시한 게시글'}/>
        <MainContentBox>
          <NoneComponent title={'좋아요가 없습니다...'} />
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
  padding-top: 194px;
  justify-content: center;
`