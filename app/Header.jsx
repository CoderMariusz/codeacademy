import DarkModeButton from './DarkModeButton';
import LoginButton from './LoginButton';

function Header() {
  return (
    <div className='flex justify-between p-4'>
      <div>
        <h1 className='text-lg'>My list to Do!</h1>
        <p className='text-xs'>write what you need to do...</p>
      </div>
      <div className='flex gap-2 justify-center items-start'>
        <DarkModeButton />
        <LoginButton />
        {/* <User/> */}
      </div>
    </div>
  );
}

export default Header;
