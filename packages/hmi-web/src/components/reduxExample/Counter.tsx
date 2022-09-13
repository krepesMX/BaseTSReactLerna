import React from 'react';
import './Counter.css'
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { decrement, increment } from '../../redux/slices/counterSlice';

function Counter() {

  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <div>
      <button
        className='Buttons'
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <p>The count: {count}</p>
      <button
        className='Buttons'
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
    </div>
  );

}

export default Counter;