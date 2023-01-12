'use client';
import { useState } from 'react';
import LoginForm from '../LoginForm';

function page() {
  const [open, setOpen] = useState(true);
  return (
    <div>
      <h1>login</h1>
      <LoginForm
        isOpen={open}
        setOpen={setOpen}
      />
    </div>
  );
}

export default page;
