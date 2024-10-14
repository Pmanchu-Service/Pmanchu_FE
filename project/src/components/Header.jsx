import styled from "styled-components"
import { LoginBtn } from "./button/LoginBtn"
import { ReactComponent as Icon } from "../assets/Pmanchu_Logo.svg"
import { useState } from "react"
import { CreateProjectBtn } from "./button/CreateProjectBtn"
import { HeaderTextBtn } from "./button/HeaderTextBtn"
import { ReactComponent as Bell } from "../assets/mainpage/bell.svg"
import { ReactComponent as Belled } from "../assets/mainpage/belled.svg"
import { SearchBar } from "./search/SearchBar"

export const Header = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isBell, setIsBell] = useState(false);

  return(
    <>
      { isLogin ? 
        (<LoginContainer>
          <Icon cursor="pointer"></Icon>
          <SearchBar isUserSearch={false} />
          <RightGroup>
            <TextGroup>
              <HeaderTextBtn Title={'좋아요한 프젝'}/>
              <Stick/>
              <HeaderTextBtn Title={'유저 검색'}/>
              <Stick/>
            </TextGroup>
            { isBell ? (<Belled cursor="pointer"/>) : (<Bell cursor="pointer"/>) }
            <CreateProjectBtn/>
            <Profile/>
          </RightGroup>
        </LoginContainer>)
        :
        (<LogoutContainer>
          <Icon></Icon>
          <LoginBtn/>
        </LogoutContainer>)
        }
    </>
    )
}

const LogoutContainer = styled.div`
  box-sizing: border-box;
  height: 64px;
  border-bottom: 1px solid #CCCCCC;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 36px 0 32px;
`

const LoginContainer = styled.div`
  box-sizing: border-box;
  height: 64px;
  border-bottom: 1px solid #CCCCCC;
  padding: 0 36px 0 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Stick = styled.div`
width: 0px;
height: 36px;
border: 2px solid #CCCCCC;
`

const Profile = styled.div`
width: 36px;
height: 36px;
background: #B9B9B9;
border-radius: 50px;
`

const RightGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`

const Search = styled.div`
box-sizing: border-box;
width: 600px;
height: 40px;
background: #FAFAFA;
border: 1px solid #CCCCCC;
border-radius: 20px;
font-weight: 400;
font-size: 16px;
line-height: 26px;
color: #AAAAAA;
display: flex;
justify-content: center;
align-items: center;
`

const SearchGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
`

const TextGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`