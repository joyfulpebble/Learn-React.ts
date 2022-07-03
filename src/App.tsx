import React, { useEffect, useState } from 'react';
import axios from 'axios'
import UserList from './components/UserList';
import { IUser } from './types/Types';

function App() {
  const [users, setUsers] = useState<IUser[]>([]);

  async function getUsers() {
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data);
    } catch (error) {
      alert(error)
    }
  }
  useEffect(() => {
    getUsers();
  }, [])

  return (
    <div>
        <UserList users={users}/>
    </div>
  );
}

export default App;
