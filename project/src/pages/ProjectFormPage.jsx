import styled from "styled-components";
import DataTable from 'react-data-table-component';
import { Header } from "../components/Header";

export const ProjectForm = () => {

  return (
    <>
    <Header />
    <ContainerBox>
      <Container>
        <Title>프로젝트 보고서</Title>
        <StyledHr />
        <Project>
        <SubTitle>프로젝트</SubTitle>
        <StyledHr />
        <Setting>프로젝트 이름</Setting>
        <Edit>프만추</Edit>
        <StyledHr />
        <Setting>팀명</Setting>
        <Edit>프만추</Edit>
        <StyledHr />
        <Setting>팀원 및 역할</Setting>
        <DataTableContainer>
          <DataTable
            columns={columns}
            data={data}
            pagination={false}
            customStyles={customStyles}
            noHeader={false}
            />
        </DataTableContainer>
        <StyledHr />
        </Project>
      <Outline>
        <SubTitle>개요</SubTitle>
        <StyledHr/>
        <Setting>프로젝트 동기</Setting>
          <OutlineEdit>제 동기요? 집에가고싶은 간절한 그 마음이 제 유일한 동기입니다 ㅅㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹ</OutlineEdit>
        <StyledHr/>
        <Setting>주요 서비스</Setting>
          <OutlineEdit>서비스요? 집에가고싶은 간절한 그 마음이 제 유일한 서비스입니다 ㅅㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹ</OutlineEdit>
        <StyledHr/>
        <Setting>상세기능</Setting>
          <OutlineEdit>기능요? 집에가고싶은 간절한 그 마음이 제 유일한 기능입  니다 ㅅㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹ</OutlineEdit>
        <LastStyledHr/>
      </Outline>
      </Container>
    </ContainerBox>
    </>
  );
};

const columns = [
  { name: '학번', selector: row => row.id, sortable: true, width: '15%' },
  { name: '이름', selector: row => row.name, sortable: true, width: '15%' },
  { name: '역할', selector: row => row.role, sortable: true, width: '70%', wrap: true } // 역할에 wrap 속성 추가
];

const data = [
  { id: '1401', name: '김소희', role: '예 저는 이 프로젝트에서 백수를 담당하고 있습니다' },
  { id: '1011', name: '양병건', role: '예 저는 이 프로젝트에서 귀여움을 담당하고 있습니다 띠용띠용핑 띠용띠용핑 띠용띠용핑 띠용띠용핑' }
];

const customStyles = {
  rows: {
    style: {
      borderBottom: '1px solid #ccc',
      borderRight: '1px solid #ccc',
      borderLeft: '1px solid #ccc',
    },
  },
  headCells: {
    style: {
      fontWeight: '700',
      backgroundColor: '#f0f0f0',
      borderRight: '1px solid #ccc',
      borderLeft: '1px solid #ccc',
      borderBottom: '1px solid #ccc',
      borderTop: '1px solid #ccc',
    },
  },
};

const Container = styled.div`
  width: 35%;
  height: calc(100vh - 64px);
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const ContainerBox = styled.div`
  display: flex;
  justify-content: center;
`

const Title = styled.h1`
  font-size: 25px;
  margin-top: 40px;
`;

const SubTitle = styled.h1`
  font-size: 20px;
  float: left;
  margin-bottom: 35px;
  margin-top: 35px;
`;

const StyledHr = styled.hr`
  clear: both;
  margin-top: 30px;
  margin-bottom: 10px;
`;

const LastStyledHr = styled.hr`
  margin-bottom: 100px;
  clear: both;
  margin-top: 40px;
`

const Project = styled.div`
  
`

const Outline = styled.div`
  float: left;
  text-align: left;
`

const Setting = styled.span`
  float: left;
  margin-top: 20px;
  margin-bottom: 15px;
  margin-left: 20px;
  font-weight: 700;
`;

const Edit = styled.span`
  float: left;
  margin-left: 20px;
  font-weight: 500;
  clear: both;
  margin-bottom: 30px;
`;

const OutlineEdit = styled.span`
  float: left;
  margin-left: 20px;
  font-weight: 500;
  clear: both;
  margin-bottom: 40px;
`

const DataTableContainer = styled.div`
  width: 95%;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 30px;
  text-align: left;
`;
