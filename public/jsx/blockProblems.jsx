import React, {
    useState,
    useContext,
    useEffect,
    useCallback,
    useMemo
  } from "react";
  import "../scss/blockProblems.scss";
  export default function BlockProblems(){
    return (
        <div id="problems">
        <div className="problems__title">
          <h3 id="list__problem">Перелік проблем</h3>
        </div>
        <div className="first-row">
            <ul className="image-items">
                <li className="image-item">
                    <div className="problem__content">
                        <div className="problem__title">Problem Name</div>
                        <div className="problem__text">A brief description of the problem</div>
                        <div className="problems__btn">
                            <a className="btn--one donate__btn--one" href="#">Donate</a>
                            <a className="btn--one problem__btn--one" href="#">Допомогти</a>
                        </div>
                      </div>
                </li>
                <li className="image-item">
                    <div className="problem__content">
                        <div className="problem__title">Problem Name</div>
                        <div className="problem__text">A brief description of the problem</div>
                        <div className="problems__btn">
                            <a className="btn--one donate__btn--one" href="#">Donate</a>
                            <a className="btn--one problem__btn--one" href="#">Допомогти</a>
                        </div>
                      </div>
                </li>
                <li className="image-item">
                    <div className="problem__content">
                        <div className="problem__title">Problem Name</div>
                        <div className="problem__text">A brief description of the problem</div>
                        <div className="problems__btn">
                            <a className="btn--one donate__btn--one" href="#">Donate</a>
                            <a className="btn--one problem__btn--one" href="#">Допомогти</a>
                        </div>
                      </div>
                </li>
                <li className="image-item">
                    <div className="problem__content">
                        <div className="problem__title">Problem Name</div>
                        <div className="problem__text">A brief description of the problem</div>
                        <div className="problems__btn">
                            <a className="btn--one donate__btn--one" href="#">Donate</a>
                            <a className="btn--one problem__btn--one" href="#">Допомогти</a>
                        </div>
                      </div>
                </li>
              </ul>
        </div>
        <div className="second-row">
            <ul className="image-items">
                <li className="image-item">
                    <div className="problem__content">
                        <div className="problem__title">Problem Name</div>
                        <div className="problem__text">A brief description of the problem</div>
                        <div className="problems__btn">
                            <a className="btn--one donate__btn--one" href="#">Donate</a>
                            <a className="btn--one problem__btn--one" href="#">Допомогти</a>
                        </div>
                      </div>
                </li>
                <li className="image-item">
                    <div className="problem__content">
                        <div className="problem__title">Problem Name</div>
                        <div className="problem__text">A brief description of the problem</div>
                        <div className="problems__btn">
                            <a className="btn--one donate__btn--one" href="#">Donate</a>
                            <a className="btn--one problem__btn--one" href="#">Допомогти</a>
                        </div>
                      </div>
                </li>
                <li className="image-item">
                    <div className="problem__content">
                        <div className="problem__title">Problem Name</div>
                        <div className="problem__text">A brief description of the problem</div>
                        <div className="problems__btn">
                            <a className="btn--one donate__btn--one" href="#">Donate</a>
                            <a className="btn--one problem__btn--one" href="#">Допомогти</a>
                        </div>
                      </div>
                </li>
                <li className="image-item">
                    <div className="problem__content">
                        <div className="problem__title">Problem Name</div>
                        <div className="problem__text">A brief description of the problem</div>
                        <div className="problems__btn">
                            <a className="btn--one donate__btn--one" href="#">Donate</a>
                            <a className="btn--one problem__btn--one" href="#">Допомогти</a>
                        </div>
                      </div>
                </li>
              </ul>
        </div>
      </div>

    );


  }