'use client';
import { ThemeProvider } from 'next-themes';
import { createContext, useState } from 'react';

export const AuthContext = createContext();

export default function Providers({ children }) {
  const [user, setUser] = useState(null);
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
      <AuthContext.Provider value={{ login, currentUser }}>
        {children}
      </AuthContext.Provider>
    </ThemeProvider>
  );
}
