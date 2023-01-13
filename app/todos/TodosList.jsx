'use client';
import React from 'react';
import Card from './Card';
import { getTodos } from '../../firebase/firebase';

function TodosList({ todos }) {
  console.log(todos);
  async function getTodos2() {
    const todos = await getTodos();
    return todos;
  }
  const todos2 = getTodos2();
  console.log('second todos:', todos2);
  return (
    <div className='w-full justify-items-center grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3'>
      {todos2 &&
        todos2.map((todo) => (
          <Card
            key={todo.id}
            title={todo.title}
            description={todo.description}
            priority={todo.priority}
            time={todo.time}
            date={todo.date}
            user={todo.user}
          />
        ))}
    </div>
  );
}

export default TodosList;
