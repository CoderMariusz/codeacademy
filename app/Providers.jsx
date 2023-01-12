'use client';
import { ThemeProvider } from 'next-themes';
import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

export default function Providers({ children }) {
  const storage = sessionStorage.getItem('user');
  const [user, setUser] = useState(storage ? JSON.parse(storage) : null);

  useEffect(() => {
    sessionStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  function login(user) {
    console.log('login');
    setUser(user);
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
