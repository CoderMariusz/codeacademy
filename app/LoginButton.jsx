'use client';
import Link from 'next/link';

function LoginButton() {
  return (
    <>
      <Link
        className='border-none bg-zinc-600 font-bold p-2 rounded-xl'
        href='/login'>
        Login
      </Link>
    </>
  );
}

export default LoginButton;
