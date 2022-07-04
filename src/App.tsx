import React, { useEffect, useState } from 'react';
import axios from 'axios'
import UserList from './components/UserList';
import { IUser } from './types/Types';
import List from './components/List';
import UserItem from './components/UserItem';

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
        <List items={users} renderItem={ (user: IUser) => <UserItem user={user} key={user.id}/>}/>
    </div>
  );
}

export default App;
