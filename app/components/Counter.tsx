'use client';

import { useAppDispatch, useAppSelector } from '../store/hooks';
import { increment, decrement } from '../store/features/counterSlice';

export default function Counter() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-2xl font-bold">Counter: {count}</h2>
      <div className="flex gap-4">
        <button
          onClick={() => dispatch(decrement())}
          className="px-4 py-2 bg-red-500 text-white rounded-md"
        >
          Decrease
        </button>
        <button
          onClick={() => dispatch(increment())}
          className="px-4 py-2 bg-green-500 text-white rounded-md"
        >
          Increase
        </button>
      </div>
    </div>
  );
}
