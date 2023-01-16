'use client';
import React, { useEffect, useState } from 'react';
import Card from './Card';
import { deleteTodo, getTodos } from '../firebase';
import EditModal from './EditModal';

function TodosList() {
  const [todos, setTodos] = useState([]);
  const [editModal, setEditModal] = useState(false);
  const [editTodo, setEditTodo] = useState({});

  function deleteObjFun(deleteObj) {
    deleteTodo(deleteObj);
    const todosAfterDelete = todos.filter((todo) => todo.id !== deleteObj);
    console.log(todosAfterDelete);
    setTodos(todosAfterDelete);
  }

  function editObjFun(editObj) {
    todos.filter((todo) => {
      if (todo.id === editObj) {
        setEditTodo(todo);
        setEditModal(true);
      }
    });
  }
  useEffect(() => {
    getTodos().then((res) => {
      setTodos(res);
    });
  }, []);

  useEffect(() => {
    setTodos((prevState) => {
      const newTodos = prevState.map((todo) => {
        if (todo.id === editTodo.id) {
          return {
            ...todo,
            title: editTodo.title,
            description: editTodo.description,
            priority: editTodo.priority,
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString(),
            user: editTodo.user
          };
        }
        return todo;
      });
      return newTodos;
    });
  }, [editTodo]);

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
                delete={() => deleteObjFun(todo.id)}
                edit={() => editObjFun(todo.id)}
              />
            ))}
        </div>
      )}
      {editModal && (
        <EditModal
          editTodo={editTodo}
          setModalOpen={setEditModal}
          modalOpen={editModal}
          editTodoFun={setEditTodo}
        />
      )}
    </>
  );
}

export default TodosList;
