import styled from "styled-components"
import { ReactComponent as SearchBtn } from "../../assets/SearchBtn.svg"


export const SearchBar = ({ isUserSearch }) => {
  return(
    <>
      { !isUserSearch ? 
        (<Search>
          <SearchGroup>
            <SearchBtn/>
            검색창
          </SearchGroup>
        </Search>)
        :
        (<UserSearch>
          <UserSearchGroup>
            <SearchBtn/>
            유저 검색
          </UserSearchGroup>
        </UserSearch>)
      }
    </>
  );
}

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

const UserSearch = styled.div`
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

const UserSearchGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
`