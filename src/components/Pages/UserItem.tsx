import React, { FC, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { IUser } from '../../types/Types';

const UserItem: FC = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const { id } = useParams();
  const navigate = useNavigate();

  async function getUser(): Promise<void> {
    try {
      const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + id);
      setUser(response.data);
    } catch (error) {
      alert(error)
    }
  }

  useEffect(() => {
    getUser()
  }, []);

  return (
    <div>
      <button onClick={() => navigate('/users')}>Back</button>

      <br />

      <h1>Стриница номер {user?.id} имя пользователя {user?.name}</h1>
    </div>
  )
}
export default UserItem