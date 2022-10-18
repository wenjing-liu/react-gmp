/* eslint-disable react/button-has-type */
import React, { useReducer } from 'react';
import './Counter.css';

interface State {
  count: number;
}

enum Types {
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT',
}

type Action = { type: Types.INCREMENT } | { type: Types.DECREMENT };

const reducer = (state: State, action: Action) => {
  const { INCREMENT, DECREMENT } = Types;
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMENT:
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};

const initialState: State = { count: 0 };

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { INCREMENT, DECREMENT } = Types;
  return (
    <>
      <p>Counter:</p>
      <button className="btn margin-right-5" onClick={() => dispatch({ type: DECREMENT })}>-</button>
      {state.count}
      <button className="btn margin-left-5" onClick={() => dispatch({ type: INCREMENT })}>+</button>
    </>
  );
}

export default Counter;
