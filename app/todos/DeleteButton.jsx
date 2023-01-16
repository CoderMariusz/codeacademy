import React from 'react';

function DeleteButton({ del }) {
  return (
    <button
      className='bg-red-600/90 text-sm text-white p-1 rounded-md hover:bg-red-700/90 transition-all ease-in-out duration-300'
      onClick={() => {
        del();
      }}>
      Delete
    </button>
  );
}

export default DeleteButton;
