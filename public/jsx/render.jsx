import { BrowserRouter, Route,Switch} from 'react-router-dom';
import Header from "./header";
import ReactDOM from "react-dom";
import React, { useState, useContext, useEffect, useCallback, useMemo } from 'react';
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
      <button onClick={()=>history.push("/new-problem")}>create new problem</button>
      <BlockMap />
      <BlockProblems />
      <BlockSolved />
      <Footer/>
    </>
  );
}

function newProblemPage(props) {
  const [tiitle, settitle] = useState();
  const [description, setdescription] = useState();
  return (
    < div id="new-problem-page">
      <p>problem title</p>
      <input onChange={handle => settitle(handle.target.value)} />
      <p>problem description</p>
      <input type="text" value={description} onChange={handle => setdescription(handle.target.value)} />
      <button>submit</button>
    </div >
  )
}

export function Site(){
  return(
    <BrowserRouter>
<<<<<<< HEAD
      <Switch>
        <Route exact={true} path="/" component={Main} />
        <Route exact={true} path="/my-account" component={BlockMyAccount} />
        <Route exact={true} path="/registration" component={RegistrationPage} />
        <Route exact={true} path="/login" component={LoginPage} />
      </Switch>
=======
                <Switch>
                  <Route exact={true} path="/" component={Main} />
                  <Route exact={true} path="/my-account" component={BlockMyAccount} />
                  <Route exact={true} path="/new-page" component={newProblemPage} />
                </Switch>
>>>>>>> 1d58ef2456c1fc95696ce70b06de1747a0e462f7
    </BrowserRouter>
  );
}




