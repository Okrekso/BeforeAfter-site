import { BrowserRouter, Route,Switch} from 'react-router-dom';
import Header from "./header";
import ReactDOM from "react-dom";
import React from "react";
import BlockMap from "./blockMap";
import BlockProblems from "./blockProblems";
import BlockSolved from "./blockSolved";
import Footer from "./footer";
import BlockMyAccount from "./blockMyAccount"
import RegistrationPage from './registrationPage';
import LoginPage from './loginPage';
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> b769f47c3877a23661893433a8c1f8867163ddf1
      <Switch>
        <Route exact={true} path="/" component={Main} />
        <Route exact={true} path="/my-account" component={BlockMyAccount} />
        <Route exact={true} path="/registration" component={RegistrationPage} />
        <Route exact={true} path="/login" component={LoginPage} />
      </Switch>
<<<<<<< HEAD
=======
=======
                <Switch>
                  <Route exact={true} path="/" component={Main} />
                  <Route exact={true} path="/my-account" component={BlockMyAccount} />
                  <Route exact={true} path="/new-page" component={newProblemPage} />
                </Switch>
>>>>>>> 1d58ef2456c1fc95696ce70b06de1747a0e462f7
>>>>>>> b769f47c3877a23661893433a8c1f8867163ddf1
    </BrowserRouter>
  );
}
