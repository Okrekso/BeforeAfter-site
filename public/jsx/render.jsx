import Header from "./header";
import ReactDOM from "react-dom";
import React from "react";

export default function render(container) {
  ReactDOM.render(<Site />, container);
}

export function Site() {
  return (
    <>
      <Header />
    </>
  );
}
