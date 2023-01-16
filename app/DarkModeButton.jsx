'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

function DarkModeButton() {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <button
      onClick={() => {
        setTheme(currentTheme === 'dark' ? 'light' : 'dark');
      }}>
      {currentTheme === 'dark' ? (
        <SunIcon className='w-8 h-10 text-yellow-500/80' />
      ) : (
        <MoonIcon className='w-8 h-8' />
      )}
    </button>
  );
}

export default DarkModeButton;
