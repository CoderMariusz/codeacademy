'use client';
import { AiFillSetting } from 'react-icons/ai';
import { FaTasks } from 'react-icons/fa';
import { MdAddTask, MdTaskAlt } from 'react-icons/md';

function SideList() {
  return (
    <div className=' w-fit text-sm pr-3'>
      <a
        href='/addTask'
        className='flex flex-nowrap gap-2 mb-3'>
        <MdAddTask className='h-6 w-6' />
        <p className='whitespace-nowrap hidden sm:block'>New Task</p>
      </a>
      <a
        href='/todos'
        className='flex flex-nowrap gap-2 mb-3 '>
        <FaTasks className='h-6 w-6' />
        <p className='whitespace-nowrap hidden sm:block'>Tasks</p>
      </a>
      <button
        onClick={() => {
          console.log('project');
        }}
        className='flex flex-nowrap gap-2 mb-3'>
        <MdTaskAlt className='h-6 w-6' />
        <p className='whitespace-nowrap hidden sm:block'>Project</p>
      </button>
      <button
        onClick={() => {
          console.log('setting');
        }}
        className='flex flex-nowrap gap-2 mb-3'>
        <AiFillSetting className='h-6 w-6' />
        <p className='whitespace-nowrap hidden sm:block'>Setting</p>
      </button>
    </div>
  );
}

export default SideList;
