import React, { lazy, Suspense, useEffect, useRef, ErrorInfo } from "react";
import ReactChild from "ReactChild/App";
import "./App.css";
import Spinner from "./components/spinner";
import { Error } from "./components/error";
import ErrorBoundary from "./components/error-boundary";

const ReactChildAppComponent = lazy<typeof ReactChild>(async () => {
  return await import("ReactChild/App");
});

const VueChildAppComponent = lazy<typeof ReactChild>(async () => {
  const { mount } = await import("VueChild/App");

  const Component = () => {
    const elementRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
      const el = document.createElement("div");
      mount(el);
      if (elementRef.current) {
        elementRef.current.innerHTML = el.innerHTML;
      }
    });
    return <div ref={elementRef} />;
  };

  return {
    default: Component,
  };
});

const AngularChildAppComponent = lazy<() => React.JSX.Element>(async () => {
  await import("AngularChild/Component");
  return {
    default: () => (
      <>
        <angular-mfe></angular-mfe>
      </>
    ),
  };
});

const SvelteChildAppComponent = lazy(async () => {
  const module = await import("SvelteChild/App");
  console.log(module);

  const Component = () => {
    const elementRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
      const el = document.createElement("div");
      new module.default({
        target: el,
        props: {
          name: "Root",
        },
      });
      if (elementRef.current) {
        elementRef.current.innerHTML = el.innerHTML;
      }
    });
    return <div ref={elementRef} />;
  };

  return {
    default: Component,
  };
});

export default function App() {
  return (
    <div>
      <div className="header">Root application [React 19]</div>
      <div className="tile-container">
        <a href="http://localhost:3001" target="_blank" className="tile">
          <ErrorBoundary fallback={<Error />}>
            <Suspense fallback={<Spinner />}>
              <ReactChildAppComponent></ReactChildAppComponent>
            </Suspense>
          </ErrorBoundary>
        </a>
        <a href="http://localhost:4200" target="_blank" className="tile">
          <ErrorBoundary fallback={<Error />}>
            <Suspense fallback={<Spinner />}>
              <AngularChildAppComponent />
            </Suspense>
          </ErrorBoundary>
        </a>
        <a href="http://localhost:3003" target="_blank" className="tile">
          <ErrorBoundary fallback={<Error />}>
            <Suspense fallback={<Spinner />}>
              <VueChildAppComponent></VueChildAppComponent>
            </Suspense>
          </ErrorBoundary>
        </a>
        <a href="http://localhost:8080" target="_blank" className="tile">
          <ErrorBoundary fallback={<Error />}>
            <Suspense fallback={<Spinner />}>
              <SvelteChildAppComponent></SvelteChildAppComponent>
            </Suspense>
          </ErrorBoundary>
        </a>
      </div>
    </div>
  );
}
