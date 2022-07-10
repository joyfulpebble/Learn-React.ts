import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { IUser } from '../../types/Types';
import UserItem from '../UserItem';
import List from '../List';

export default function UserList() {
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
    <List items={users} renderItem={ (user: IUser) => <UserItem user={user} key={user.id}/>}/>
  )
}
