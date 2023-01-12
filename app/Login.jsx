'use client';
import { useState } from 'react';
import LoginForm from './LoginForm';

function Login() {
  const [open, setOpen] = useState(false);
  console.log(open);
  return (
    <>
      <button
        className='border-none bg-zinc-600 font-bold p-2 rounded-xl'
        onClick={() => {
          setOpen(!open);
        }}>
        Login
      </button>
      <LoginForm isOpen={open} />
    </>
  );
}

export default Login;
