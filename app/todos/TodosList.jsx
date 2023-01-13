'use client';
import Card from './Card';
import { getTodos } from '../firebase';
import { useEffect, useState } from 'react';

function TodosList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos().then((todos) => {
      setTodos(todos);
    });
  }, []);
  if (todos.length === 0) <p>No todos</p>;
  console.log(todos);
  return (
    <>
      {todos && todos.length !== 0 && (
        <div className='w-full justify-items-center grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3'>
          {todos &&
            todos.map((todo) => (
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
      )}
    </>
  );
}

export default TodosList;
