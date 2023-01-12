import React from 'react';
import { GoPrimitiveDot } from 'react-icons/go';

function Card({ key, title, description, date, time, priority, user }) {
  return (
    <div
      key={key}
      className=' max-w-xs group lg:max-w-md border-stone-700/80 border-solid border-[1px] rounded-md hover:border-yellow-600/90 transition-all ease-in-out duration-300  '>
      <h1 className='text-center bg-zinc-600/70 p-2 group-hover:bg-yellow-700/90 transition-all ease-in-out duration-300 '>
        {title}
      </h1>
      <div className='p-2'>
        <p className='line-clamp-5 pb-1 border-b-2 border-zinc-700/40 '>
          {description}
        </p>
        <div className='flex justify-between'>
          <div>
            <p>{time}</p>
            <p>{date}</p>
          </div>

          <div className='flex items-center'>
            {priority === 'low' && (
              <GoPrimitiveDot className='text-green-600/90' />
            )}
            {priority === 'medium' && (
              <GoPrimitiveDot className='text-yellow-400/90' />
            )}
            {priority === 'high' && (
              <GoPrimitiveDot className='text-red-600/90' />
            )}
            <p>{priority}</p>
          </div>
        </div>
        <p className='text-xs text-slate-400/50 text-right'>
          task sign to: {user}
        </p>
      </div>
    </div>
  );
}

export default Card;
