import {
  Container,
  Table,
  TableBody,
  TableRow,
  TableData,
  HeaderRow,
  Header,
  Name,
  LastName,
  Title,
  Phone,
  Email,
} from './styles';

export type IUser = {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
    postcode: number;
    coordinates: {
      latitude: string;
      longitude: string;
    };
    timezone: {
      offset: string;
      description: string;
    };
  };
  email: string;
  login: {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
  };
  dob: {
    date: string;
    age: number;
  };
  registered: {
    date: string;
    age: number;
  };
  phone: string;
  cell: string;
  id: {
    name: string;
    value: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
};

type IProps = {
  users: IUser[];
};
export const SimpleTable: React.FC<IProps> = ({ users }) => {
  return (
    <Container>
      <Header>
        <Name>
          <Title>Name</Title>
        </Name>
        <LastName>
          <Title>LastName</Title>
        </LastName>
        <Email>
          <Title>Email</Title>
        </Email>
        <Phone>
          <Title>Phone</Title>
        </Phone>
      </Header>
      <Table>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.login.uuid}>
              <TableData>{user.name.first}</TableData>
              <TableData>{user.name.last}</TableData>
              <TableData>{user.email}</TableData>
              <TableData>{user.phone}</TableData>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};
