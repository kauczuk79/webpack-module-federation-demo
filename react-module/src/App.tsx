import React from "react";
import ReactIcon from "./components/react-icon";
import "./App.css";

export default function App({ who = "world" }: { who?: string }) {
  return (
    <div className="module-container">
      <ReactIcon />
      <span>Hello {who}</span>
    </div>
  );
}
