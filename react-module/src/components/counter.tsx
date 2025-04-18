import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { federatedSlices } from "../App";

export function Counter() {
  const counter = useSelector((state: any) => state.counter.counter);
  const dispatch = useDispatch();
  return (
    <div>
      Current value: {counter}
      <button onClick={() => dispatch({ type: "counter/increment" })}>
        Increment
      </button>
    </div>
  );
}
