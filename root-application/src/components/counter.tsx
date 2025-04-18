import React from "react";
import { increment } from "../store/counterReducer";
import { useSelector, useDispatch } from "react-redux";

export function Counter() {
  const counter = useSelector((state: any) => state.counter.counter);
  const dispatch = useDispatch();
  return (
    <div>
      Current value: {counter}
      <button onClick={() => dispatch(increment())}>Increment</button>
    </div>
  );
}
