import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 40rem;
  text-align: center;
`;

const TableBody = styled.tbody`
  display: block;
  height: 400px;
  overflow-y: scroll;
`;

const TableRow = styled.tr`
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
`;

const HeaderRow = styled.tr`
  display: block;
  vertical-align: inherit;
  border-color: inherit;
  background-color: #f5f5f5;
`;

const TableData = styled.td`
  padding: 6px;
  border: 1px solid #ddd;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  width: 40rem;
  padding: 10px;
  border: 1px solid #ddd;
`;
const Name = styled.div`
  margin-left: 1rem;
`;

const LastName = styled.div`
  margin-left: 2rem;
`;

const Email = styled.div`
  margin-left: 8rem;
`;

const Phone = styled.div`
  margin-left: 8rem;
`;
const Title = styled.h1`
  font-size: 18px;
  color: #333;
  margin: 0;
`;
export {
  Container,
  Table,
  TableBody,
  TableRow,
  TableData,
  HeaderRow,
  Header,
  Name,
  LastName,
  Email,
  Phone,
  Title,
};
