import { BrowserRouter, Route,Switch} from 'react-router-dom';
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

function Main() {
  return (
    <>
      <Header />
      <BlockMap />
      <BlockProblems />
      <BlockSolved />
      <Footer/>
    </>
  );
}
export function Site(){
  return(
    <BrowserRouter>
                <Switch>
                  <Route exact={true} path="/" component={Main} />
                  <Route exact={true} path="/my-account" component={BlockMyAccount} />
                </Switch>
    </BrowserRouter>
  );
}
