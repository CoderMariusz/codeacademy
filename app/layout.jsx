import '../styles/globals.css';
import Header from './Header';
import Providers from './Providers';
import SideList from './sideList';

export default function RootLayout({ children }) {
  return (
    <html>
      <Providers>
        <body className='bg-zinc-800 text-slate-200 mx-auto flex flex-col'>
          <Header />
          <div className='grid w-48 grid-cols-2'>
            <SideList />
            {children}
          </div>
        </body>
      </Providers>
    </html>
  );
}
