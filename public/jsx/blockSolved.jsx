import React, {
    useState,
    useContext,
    useEffect,
    useCallback,
    useMemo
  } from "react";
  import "../scss/blockSolved.scss";

  export default function BlockSolved(){
    return(
        <div id="solved-problem">
        <div className="Nproblems__title">
            <h3 id="list__problem">Вирішені проблеми</h3>
          </div>
          <div className="first-row">
              <ul className="image-items">
                <li className="image-item">
                    <div className="Nproblem__content">
                        <div className="Nproblem__title">Problem Name</div>
                        <div className="Nproblem__text">the problem is resolved?</div>
                        <div className="Nproblems__btn">
                            <a className="btn--two problem__btn--two" href="#">Так</a>
                            <a className="btn--two donate__btn--two" href="#">Ні</a>
                        </div>
                      </div>
                </li>
                <li className="image-item">
                    <div className="Nproblem__content">
                        <div className="Nproblem__title">Problem Name</div>
                        <div className="Nproblem__text">the problem is resolved?</div>
                        <div className="Nproblems__btn">
                            <a className="btn--two problem__btn--two" href="#">Так</a>
                            <a className="btn--two donate__btn--two" href="#">Ні</a>
                        </div>
                      </div>
                </li>
                <li className="image-item">
                    <div className="Nproblem__content">
                        <div className="Nproblem__title">Problem Name</div>
                        <div className="Nproblem__text">the problem is resolved?</div>
                        <div className="Nproblems__btn">
                            <a className="btn--two problem__btn--two" href="#">Так</a>
                            <a className="btn--two donate__btn--two" href="#">Ні</a>
                        </div>
                      </div>
                </li>
                <li className="image-item">
                    <div className="Nproblem__content">
                        <div className="Nproblem__title">Problem Name</div>
                        <div className="Nproblem__text">the problem is resolved?</div>
                        <div className="Nproblems__btn">
                            <a className="btn--two problem__btn--two" href="#">Так</a>
                            <a className="btn--two donate__btn--two" href="#">Ні</a>
                        </div>
                      </div>
                </li>
              </ul>
          </div>
          <div className="second-row">
              <ul className="image-items">
                <li className="image-item">
                    <div className="Nproblem__content">
                        <div className="Nproblem__title">Problem Name</div>
                        <div className="Nproblem__text">the problem is resolved?</div>
                        <div className="Nproblems__btn">
                            <a className="btn--two problem__btn--two" href="#">Так</a>
                            <a className="btn--two donate__btn--two" href="#">Ні</a>
                        </div>
                      </div>
                </li>
                <li className="image-item">
                    <div className="Nproblem__content">
                        <div className="Nproblem__title">Problem Name</div>
                        <div className="Nproblem__text">the problem is resolved?</div>
                        <div className="Nproblems__btn">
                            <a className="btn--two problem__btn--two" href="#">Так</a>
                            <a className="btn--two donate__btn--two" href="#">Ні</a>
                        </div>
                      </div>
                </li>
                <li className="image-item">
                    <div className="Nproblem__content">
                        <div className="Nproblem__title">Problem Name</div>
                        <div className="Nproblem__text">the problem is resolved?</div>
                        <div className="Nproblems__btn">
                            <a className="btn--two problem__btn--two" href="#">Так</a>
                            <a className="btn--two donate__btn--two" href="#">Ні</a>
                        </div>
                      </div>
                </li>
                <li className="image-item">
                    <div className="Nproblem__content">
                        <div className="Nproblem__title">Problem Name</div>
                        <div className="Nproblem__text">the problem is resolved?</div>
                        <div className="Nproblems__btn">
                            <a className="btn--two problem__btn--two" href="#">Так</a>
                            <a className="btn--two donate__btn--two" href="#">Ні</a>
                        </div>
                      </div>
                </li>
              </ul>
          </div>
    </div>


    );

  }