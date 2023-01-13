'use client';
import { ThemeProvider } from 'next-themes';
import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

export default function Providers({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const Store = sessionStorage.getItem('user') || null;
    if (Store) {
      setUser(JSON.parse(Store));
    }
  }, []);
  function login(user) {
    setUser(user);
    sessionStorage.setItem('user', JSON.stringify(user));
  }

  function currentUser() {
    return user;
  }
  return (
    <AuthContext.Provider value={{ user, login, currentUser }}>
      <ThemeProvider
        attribute='class'
        enableSystem={true}>
        {children}
      </ThemeProvider>
    </AuthContext.Provider>
  );
}
