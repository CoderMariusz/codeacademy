'use client';
import { useRouter } from 'next/navigation';
import { useContext, useState } from 'react';
import LoginForm from './LoginForm';
import { AuthContext } from './Providers';

function Login() {
  const [open, setOpen] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const router = useRouter();
  const user = currentUser();
  console.log(user);
  if (!user) {
    router.push('/login');
  }
  return (
    <>
      <button
        className='border-none bg-zinc-600 font-bold p-2 rounded-xl'
        onClick={() => {
          setOpen(!open);
        }}>
        Login
      </button>
      <LoginForm
        isOpen={open}
        setOpen={setOpen}
      />
    </>
  );
}

export default Login;
