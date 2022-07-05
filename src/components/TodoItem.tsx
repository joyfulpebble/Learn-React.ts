import { checkPrime } from 'crypto';
import React, { FC } from 'react';
import { ITodo } from '../types/Types';

interface TodoListProps{
  todo: ITodo;
}

const TodoItem: FC<TodoListProps> = ({todo}) => {
  return (
    <div>
      <div style={{padding: 15, border: '1px solid gray', marginTop: 10}}>
        {todo.id}, {todo.title} <input type="checkbox" checked={todo.completed}/>
      </div>
    </div>
  )
}

export default TodoItem;