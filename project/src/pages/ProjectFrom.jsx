import styled from "styled-components";
import DataTable from 'react-data-table-component';
import { Header } from "../components/Header";

export const ProjectForm = () => {
  // 테이블 컬럼과 데이터 정의
  const columns = [
    { name: '학번', selector: row => row.id, sortable: true },
    { name: '이름', selector: row => row.name, sortable: true },
    { name: '역할', selector: row => row.role, sortable: true }
  ];

  const data = [
    { id: '1401', name: '김소희', role: '예 저는 이 프로젝트에서 백수를 담당하고 있습니다' },
    { id: '1011', name: '양병건', role: '예 저는 이 프로젝트에서 귀여움을 담당하고 있습니다' }
  ];

  return (
    <>
      <Header />
      <Container>
        <Title>프로젝트 보고서</Title>
        <StyledHr />
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
            noHeader
            pagination={false}
          />
        </DataTableContainer>
        <StyledHr />
      </Container>
    </>
  )
};

const Container = styled.div`
  width: 35%;
  height: calc(100vh - 64px);
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 25px;
  margin-top: 40px;
`;

const SubTitle = styled.h1`
  font-size: 20px;
  float: left;
  margin-bottom: 25px;
  margin-top: 25px;
`;

const StyledHr = styled.hr`
  clear: both;
  margin-top: 10px;
`;

const Setting = styled.span`
  float: left;
  margin-top: 20px;
  margin-bottom: 15px;
  margin-left: 20px;
  font-weight: 700;
`;

const Edit = styled.span`
  float: left;
  margin-bottom: 10px;
  margin-left: 20px;
  font-weight: 500;
  clear: both;
  margin-bottom: 25px;
`;

const DataTableContainer = styled.div`
  margin-top: 20px;
  text-align: left;
`;
