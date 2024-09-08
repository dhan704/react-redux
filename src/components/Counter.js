import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../redux/store";

function Counter() {
  const value = useSelector((state) => {
    return state.value;
  });

  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
      {value}
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>
    </div>
  );
}

export default Counter;
