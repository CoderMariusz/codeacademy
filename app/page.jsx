import Link from 'next/link';

function page() {
  return (
    <div>
      <h1>hello here i will be adding new features to the app:</h1>
      <div>
        <h3>Todo! Time Managemen. </h3>
        <p>small app so you can add your todo daaily tasks</p>
        <Link href='/todos'>Todos</Link>
      </div>
    </div>
  );
}

export default page;
