import Header from "./header";
import ReactDOM from "react-dom";
import React from "react";
import BlockAbout from "./blockAbout";

export default function render(container) {
  ReactDOM.render(<Site />, container);
}

export function Site() {
  return (
    <>
      <Header />
      <BlockAbout />
    </>
  );
}
