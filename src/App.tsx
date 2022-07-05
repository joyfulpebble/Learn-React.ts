import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { ITodo, IUser } from './types/Types';
import List from './components/List';
import UserItem from './components/UserItem';
import TodoItem from './components/TodoItem';
import Events from './components/Events';

function App() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [todos, setTodos] = useState<ITodo[]>([]);

  // async function getUsers() {
  //   try {
  //     const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
  //     setUsers(response.data);
  //   } catch (error) {
  //     alert(error)
  //   }
  // }

  // async function getTodo() {
  //   try {
  //     const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10');
  //     setTodos(response.data);
  //   } catch (error) {
  //     alert(error)
  //   }
  // }

  // useEffect(() => {
  //   getUsers();
  //   getTodo();
  // }, [])

  return (
    <div>
        {/* <List items={users} renderItem={ (user: IUser) => <UserItem user={user} key={user.id}/>}/>
        <List items={todos} renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id}/>}/> */}
        <Events/>
    </div>
  );
}

export default App;
