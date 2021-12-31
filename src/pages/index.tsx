import styled from 'styled-components';

export default function Home() {
  return (
    <Container>
      <Title>Welcome With Styled Components</Title>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 14px;
  font-weight: bold;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
