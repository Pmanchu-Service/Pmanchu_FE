import styled from "styled-components"

export const HeaderTextBtn = ({Title}) => {
  return(
    <Text>{Title}</Text>
  )
}

const Text = styled.p`
font-weight: 700;
font-size: 20px;
line-height: 32px;
white-space: nowrap;
color: #000000;
cursor: pointer;
`