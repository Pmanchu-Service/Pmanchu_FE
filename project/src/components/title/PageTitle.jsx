import styled from "styled-components"
import { theme } from "../../style/theme"

export const PageTitle = ({ title }) => {
  return(
    <Container>{title}</Container>
  )
}

const Container = styled.div`
  width: 952px;
  height: 62px;
  border-bottom: 2px solid ${theme.color.gray[3]};
  display: flex;
  justify-content: center;
  font-size: 32px;
  font-weight: 600;
`