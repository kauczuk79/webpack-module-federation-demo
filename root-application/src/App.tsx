import React, { lazy, Suspense } from "react";
import ReactChild from "ReactChild/App";
import("AngularChild/Component");
import "./App.css";

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
      <div className="header">Root application [React 19]</div>
      <div className="tile-container">
        <a href="http://localhost:3001" target="_blank" className="tile">
          <Suspense fallback={<div>Loading module...</div>}>
            <ReactChildAppComponent></ReactChildAppComponent>
          </Suspense>
        </a>
        <a href="http://localhost:4200" target="_blank" className="tile">
          <div>
            <angular-mfe></angular-mfe>
          </div>
        </a>
      </div>
    </div>
  );
}
