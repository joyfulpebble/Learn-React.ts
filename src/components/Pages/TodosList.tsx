import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ITodo } from '../../types/Types';
import List from '../List';
import TodoItem from '../TodoItem';

export default function TodoList() {
  const [todos, setTodos] = useState<ITodo[]>([]);

  async function getTodo() {
    try {
      const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10');
      setTodos(response.data);
    } catch (error) {
      alert(error)
    }
  }

  useEffect(() => {
    getTodo();
  }, [])

  return (
    <List items={todos} renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id}/>}/>
  )
}
