import styled from "styled-components"
import { default as Manduimg } from '../../assets/none/noneMandu.svg';

export const NoneComponent = ({ title }) => {
  return(
    <Container>
      <Mandu src={Manduimg} alt="만두" />
      <Text>{title}</Text>
    </Container>
  )
}

const Container = styled.div`
  width: 198px;
  height: 198px;
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`

const Mandu = styled.img`
  position: absolute;
  z-index: -99;
`

const Text = styled.p`
  font-size: 20px;
  font-weight: 600;
  position: absolute;
  z-index: 20;
`