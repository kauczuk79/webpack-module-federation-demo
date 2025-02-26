import React, { lazy, Suspense } from "react";
import ReactChild from "ReactChild/App";
// import("AngularChild/Component");
import "./App.css";
import Spinner from "./components/spinner";
import Error from "./components/error";

const ReactChildAppComponent = lazy<typeof ReactChild>(async () => {
  try {
    return await import("ReactChild/App");
  } catch {
    return {
      default: (): React.JSX.Element => (
        <div className="center">
          <Error />
        </div>
      ),
    };
  }
});

const AngularChildAppComponent = lazy<() => React.JSX.Element>(async () => {
  try {
    await import("AngularChild/Component");
    return {
      default: () => (
        <div>
          <angular-mfe></angular-mfe>
        </div>
      ),
    };
  } catch {
    return {
      default: (): React.JSX.Element => (
        <div className="center">
          <Error />
        </div>
      ),
    };
  }
});

export default function App() {
  return (
    <div>
      <div className="header">Root application [React 19]</div>
      <div className="tile-container">
        <a href="http://localhost:3001" target="_blank" className="tile">
          <Suspense
            fallback={
              <div className="center">
                <Spinner />
              </div>
            }
          >
            <ReactChildAppComponent></ReactChildAppComponent>
          </Suspense>
        </a>
        <a href="http://localhost:4200" target="_blank" className="tile">
          <Suspense
            fallback={
              <div className="center">
                <Spinner />
              </div>
            }
          >
            <AngularChildAppComponent />
          </Suspense>
        </a>
      </div>
    </div>
  );
}
