'use client';
import { ThemeProvider } from 'next-themes';
import { createContext, useState } from 'react';

export const AuthContext = createContext();

export default function Providers({ children }) {
  const storage = window.sessionStorage.getItem('user');
  const [user, setUser] = useState(storage ? JSON.parse(storage) : null);

  function login(user) {
    console.log('login');
    setUser(user);
    window.sessionStorage.setItem('user', JSON.stringify(user));
  }
  function currentUser() {
    return user;
  }
  return (
    <ThemeProvider
      enableSystem={true}
      attribute='class'>
      <AuthContext.Provider value={{ user, login, currentUser }}>
        {children}
      </AuthContext.Provider>
    </ThemeProvider>
  );
}
