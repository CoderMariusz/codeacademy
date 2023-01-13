import LoginForm from './LoginForm';

function page() {
  return (
    <div className='w-full flex flex-col gap-3 items-center justify-centers'>
      <h1>Login:</h1>
      <LoginForm />
    </div>
  );
}

export default page;
