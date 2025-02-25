import React, { lazy, Suspense } from "react";

import ReactChild from "ReactChild/App";

const ReactChildAppComponent = lazy<typeof ReactChild>(async () => {
  try {
    return await import("ReactChild/App");
  } catch {
    return { default: (): React.JSX.Element => <div>Error</div> };
  }
});

export default function App() {
  return (
    <div>
      Root application [React 19]
      <Suspense fallback={<div>Loading module...</div>}>
        <ReactChildAppComponent></ReactChildAppComponent>
      </Suspense>
    </div>
  );
}
