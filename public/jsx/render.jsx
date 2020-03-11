import Header from "./header";
import ReactDOM from "react-dom";
import React from "react";
import BlockMap from "./blockMap";
import BlockProblems from "./blockProblems";
import BlockSolved from "./blockSolved";
import Footer from "./footer";
import BlockMyAccount from "./blockMyAccount"
export default function render(container) {
  ReactDOM.render(<Site />, container);
}

export function Site() {
  return (
    <>
      <Header />
      <BlockMap />
      <BlockProblems />
      <BlockSolved />
      <Footer/>
      <BlockMyAccount />
    </>
  );
}
