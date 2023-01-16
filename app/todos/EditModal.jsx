import { useRouter } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react';
import { updateTodoById } from '../firebase';
import { AuthContext } from '../Providers';

function EditModal({ editTodo, setModalOpen, modalOpen, editTodoFun }) {
  const { currentUser } = useContext(AuthContext);
  const user = currentUser();
  const [todo, setTodo] = useState({
    title: editTodo.title,
    description: editTodo.description,
    priority: 'low',
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString(),
    user: user?.email || 'quest'
  });

  useEffect(() => {
    setTodo({
      id: editTodo.id,
      title: editTodo.title,
      description: editTodo.description,
      priority: editTodo.priority,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
      user: user?.email || 'quest'
    });
  }, [editTodo, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodo((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(todo);
    updateTodoById(todo);
    setModalOpen(!modalOpen);
    editTodoFun({ ...todo });
  };

  return (
    <div className='w-72 h-fit flex flex-col  '>
      <form onSubmit={submitHandler}>
        <label
          htmlFor='title'
          className='text-sm font-semibold flex flex-col'>
          Title:
          <input
            type='text'
            name='title'
            id='title'
            value={todo.title}
            placeholder='title'
            className='mb-2 active:border-none'
            onChange={handleChange}
          />
        </label>
        <label
          htmlFor='description'
          className='text-sm font-semibold flex flex-col'>
          Description:
          <textarea
            type='text'
            name='description'
            id='description'
            value={todo.description}
            placeholder='description'
            className='mb-2'
            onChange={handleChange}
          />
        </label>
        <label
          htmlFor='priority'
          className='text-sm font-semibold flex flex-col'>
          Priority:
          <select
            id='priority'
            name='priority'
            className='mb-2'
            onChange={handleChange}>
            <option value='low'>Low</option>
            <option value='medium'>Medium</option>
            <option value='high'>High</option>
          </select>
        </label>
        <label
          htmlFor='time'
          className='text-sm font-semibold flex flex-col'>
          <input
            type='text'
            disabled
            name='time'
            id='time'
            className='mb-2'
            value={new Date().toLocaleString()}
          />
        </label>
        <button type='submit'>add Task</button>
      </form>
    </div>
  );
}

export default EditModal;
