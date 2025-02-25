import React from "react";

import ReactChild from "ReactChild/App";

const ReactChildAppComponent = require("ReactChild/App")
  .default as typeof ReactChild;

export default function App() {
  return (
    <div>
      Root application [React 19]
      <ReactChildAppComponent></ReactChildAppComponent>
    </div>
  );
}
