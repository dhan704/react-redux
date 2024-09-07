import React from "react";
import { useSelector, useDispatch } from "react-redux";

function Counter() {
  const value = useSelector((state) => {
    return state.value;
  });

  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => {
          dispatch({
            type: "increment",
          });
        }}
      >
        Increment
      </button>
      {value}
      <button
        onClick={() => {
          dispatch({
            type: "decrement",
          });
        }}
      >
        Decrement
      </button>
    </div>
  );
}

export default Counter;
