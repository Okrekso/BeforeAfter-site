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
        <div class="Nproblems__title">
            <h3 id="list__problem">Вирішені проблеми</h3>
          </div>
          <div class="first-row">
              <ul class="image-items">
                <li class="image-item">
                    <div class="Nproblem__content">
                        <div class="Nproblem__title">Problem Name</div>
                        <div class="Nproblem__text">the problem is resolved?</div>
                        <div class="Nproblems__btn">
                            <a class="btn--two problem__btn--two" href="#">Так</a>
                            <a class="btn--two donate__btn--two" href="#">Ні</a>
                        </div>
                      </div>
                </li>
                <li class="image-item">
                    <div class="Nproblem__content">
                        <div class="Nproblem__title">Problem Name</div>
                        <div class="Nproblem__text">the problem is resolved?</div>
                        <div class="Nproblems__btn">
                            <a class="btn--two problem__btn--two" href="#">Так</a>
                            <a class="btn--two donate__btn--two" href="#">Ні</a>
                        </div>
                      </div>
                </li>
                <li class="image-item">
                    <div class="Nproblem__content">
                        <div class="Nproblem__title">Problem Name</div>
                        <div class="Nproblem__text">the problem is resolved?</div>
                        <div class="Nproblems__btn">
                            <a class="btn--two problem__btn--two" href="#">Так</a>
                            <a class="btn--two donate__btn--two" href="#">Ні</a>
                        </div>
                      </div>
                </li>
                <li class="image-item">
                    <div class="Nproblem__content">
                        <div class="Nproblem__title">Problem Name</div>
                        <div class="Nproblem__text">the problem is resolved?</div>
                        <div class="Nproblems__btn">
                            <a class="btn--two problem__btn--two" href="#">Так</a>
                            <a class="btn--two donate__btn--two" href="#">Ні</a>
                        </div>
                      </div>
                </li>
              </ul>
          </div>
          <div class="second-row">
              <ul class="image-items">
                <li class="image-item">
                    <div class="Nproblem__content">
                        <div class="Nproblem__title">Problem Name</div>
                        <div class="Nproblem__text">the problem is resolved?</div>
                        <div class="Nproblems__btn">
                            <a class="btn--two problem__btn--two" href="#">Так</a>
                            <a class="btn--two donate__btn--two" href="#">Ні</a>
                        </div>
                      </div>
                </li>
                <li class="image-item">
                    <div class="Nproblem__content">
                        <div class="Nproblem__title">Problem Name</div>
                        <div class="Nproblem__text">the problem is resolved?</div>
                        <div class="Nproblems__btn">
                            <a class="btn--two problem__btn--two" href="#">Так</a>
                            <a class="btn--two donate__btn--two" href="#">Ні</a>
                        </div>
                      </div>
                </li>
                <li class="image-item">
                    <div class="Nproblem__content">
                        <div class="Nproblem__title">Problem Name</div>
                        <div class="Nproblem__text">the problem is resolved?</div>
                        <div class="Nproblems__btn">
                            <a class="btn--two problem__btn--two" href="#">Так</a>
                            <a class="btn--two donate__btn--two" href="#">Ні</a>
                        </div>
                      </div>
                </li>
                <li class="image-item">
                    <div class="Nproblem__content">
                        <div class="Nproblem__title">Problem Name</div>
                        <div class="Nproblem__text">the problem is resolved?</div>
                        <div class="Nproblems__btn">
                            <a class="btn--two problem__btn--two" href="#">Так</a>
                            <a class="btn--two donate__btn--two" href="#">Ні</a>
                        </div>
                      </div>
                </li>
              </ul>
          </div>
    </div>


    );

  }