'use client';
import { useRouter } from 'next/navigation';
import React, { useContext, useState } from 'react';
import { logInEmailAndPass } from '../firebase';
import { AuthContext } from '../Providers';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await logInEmailAndPass(email, password);
    console.log(user);
    login(user.reloadUserInfo);
    router.push('/');
  };

  return (
    <div className='h-fit w-fit z-10 flex justify-center items-center overflow-hidden'>
      <form
        action='submit'
        className='grid grid-cols-1 gap-3'
        onSubmit={handleSubmit}>
        <label
          htmlFor='email'
          className='flex justify-between'>
          Email:{' '}
          <input
            type='email'
            name='email'
            value={email}
            id='email'
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </label>
        <label htmlFor='password'>
          Password:{' '}
          <input
            type='password'
            name='password'
            value={password}
            id='password'
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>
        <button
          type='submitt'
          className='bg-yellow-700/50 rounded-md hover:bg-yellow-600 transition-all duration-300 ease-in-out'>
          login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
