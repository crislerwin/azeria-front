import api from '@/services/api';
import { useEffect, useState } from 'react';

import { SimpleTable, IUser } from '@/components/SimpleTable';

export default function Home() {
  const [users, setUsers] = useState<IUser[]>([]);
  useEffect(() => {
    async function fetchData() {
      await api.get(`/`).then((response) => {
        setUsers(response.data.results);
      });
    }
    fetchData();
  }, []);

  return (
    <>
      <SimpleTable users={users} />
    </>
  );
}
