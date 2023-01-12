import '../styles/globals.css';
import Header from './Header';
import Providers from './Providers';
import SideList from './SideList';

export default function RootLayout({ children }) {
  return (
    <html>
      <Providers>
        <body className='bg-zinc-800 text-slate-200 mx-auto flex flex-col h-screen'>
          <Header />
          <div className='grid w-full grid-page p-3 '>
            <SideList />
            {children}
          </div>
        </body>
      </Providers>
    </html>
  );
}
