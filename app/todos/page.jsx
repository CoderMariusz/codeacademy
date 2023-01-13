import { getTodos } from '../../firebase/firebase';
import TodosList from './TodosList';

async function TodosPage() {
  let todos = await getTodos();

  return (
    <div className='flex justify-center items-center'>
      <TodosList todos={todos} />
    </div>
  );
}

export default TodosPage;
