import React, { lazy, Suspense, useEffect, useRef } from "react";

import ReactChild from "ReactChild/App";

const ReactChildAppComponent = lazy<typeof ReactChild>(async () => {
  try {
    return await import("ReactChild/App");
  } catch {
    return { default: (): React.JSX.Element => <div>Error</div> };
  }
});

import("AngularChild/Component");

export default function App() {
  return (
    <div>
      Root application [React 19]
      <Suspense fallback={<div>Loading module...</div>}>
        <ReactChildAppComponent></ReactChildAppComponent>
      </Suspense>
      {/* <Suspense fallback={<>test</>}> */}
      <angular-mfe></angular-mfe>
      {/* </Suspense> */}
    </div>
  );
}
