import React from 'react';

function EditButton({ edit }) {
  return (
    <button
      className='text-center bg-yellow-400/50 hover:bg-yellow-400/80 hover:text-zinc-800 rounded-md h-8 w-10 transition-all ease-in-out duration-300'
      onClick={edit}>
      Edit
    </button>
  );
}

export default EditButton;
