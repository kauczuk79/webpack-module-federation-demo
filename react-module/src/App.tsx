import React, { Suspense, use, useEffect } from "react";
import ReactIcon from "./components/react-icon";
import "./App.css";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { Counter } from "./components/counter";

export default function App({ who = "world" }: { who?: string }) {
  return (
    <div className="module-container">
      <ReactIcon />
      <Counter />
      <span>Hello {who}</span>
    </div>
  );
}
