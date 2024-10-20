import styled from "styled-components";
import { Input } from "../signup/Input";
import { TagComponent } from "../checkpost/TagComponent";

export const StackInput = () => {
  return (
    <>
      <Container>
        <TagComponent text="front-end" />
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 690px;
`;
