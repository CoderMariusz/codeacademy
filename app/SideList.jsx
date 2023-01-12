import { AiFillSetting } from 'react-icons/ai';
import { FaTasks } from 'react-icons/fa';
import { MdAddTask, MdTaskAlt } from 'react-icons/md';

function SideList() {
  return (
    <div className=' w-48 pt-8 text-sm'>
      <div className='flex flex-nowrap gap-4 mb-8'>
        <MdAddTask
          width={30}
          height={30}
        />
        <p>New Task</p>
      </div>
      <div className='flex flex-nowrap gap-4 mb-8'>
        <FaTasks />
        <p>Tasks</p>
      </div>
      <div className='flex flex-nowrap gap-4 mb-8'>
        <MdTaskAlt />
        <p>Project</p>
      </div>
      <div className='flex flex-nowrap gap-4 mb-8'>
        <AiFillSetting />
        <p>Setting</p>
      </div>
    </div>
  );
}

export default SideList;
