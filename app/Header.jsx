import Login from './Login';

function Header() {
  return (
    <div className='flex justify-between p-4'>
      <div>
        <h1 className='text-lg'>My list to Do!</h1>
        <p className='text-xs'>write what you need to do...</p>
      </div>
      <div>
        <Login />
        {/* <User/> */}
      </div>
    </div>
  );
}

export default Header;
