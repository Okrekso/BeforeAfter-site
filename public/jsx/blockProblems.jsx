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
        <div class="problems__title">
          <h3 id="list__problem">Перелік проблем</h3>
        </div>
        <div class="first-row">
            <ul class="image-items">
                <li class="image-item">
                    <div class="problem__content">
                        <div class="problem__title">Problem Name</div>
                        <div class="problem__text">A brief description of the problem</div>
                        <div class="problems__btn">
                            <a class="btn--one donate__btn--one" href="#">Donate</a>
                            <a class="btn--one problem__btn--one" href="#">Допомогти</a>
                        </div>
                      </div>
                </li>
                <li class="image-item">
                    <div class="problem__content">
                        <div class="problem__title">Problem Name</div>
                        <div class="problem__text">A brief description of the problem</div>
                        <div class="problems__btn">
                            <a class="btn--one donate__btn--one" href="#">Donate</a>
                            <a class="btn--one problem__btn--one" href="#">Допомогти</a>
                        </div>
                      </div>
                </li>
                <li class="image-item">
                    <div class="problem__content">
                        <div class="problem__title">Problem Name</div>
                        <div class="problem__text">A brief description of the problem</div>
                        <div class="problems__btn">
                            <a class="btn--one donate__btn--one" href="#">Donate</a>
                            <a class="btn--one problem__btn--one" href="#">Допомогти</a>
                        </div>
                      </div>
                </li>
                <li class="image-item">
                    <div class="problem__content">
                        <div class="problem__title">Problem Name</div>
                        <div class="problem__text">A brief description of the problem</div>
                        <div class="problems__btn">
                            <a class="btn--one donate__btn--one" href="#">Donate</a>
                            <a class="btn--one problem__btn--one" href="#">Допомогти</a>
                        </div>
                      </div>
                </li>
              </ul>
        </div>
        <div class="second-row">
            <ul class="image-items">
                <li class="image-item">
                    <div class="problem__content">
                        <div class="problem__title">Problem Name</div>
                        <div class="problem__text">A brief description of the problem</div>
                        <div class="problems__btn">
                            <a class="btn--one donate__btn--one" href="#">Donate</a>
                            <a class="btn--one problem__btn--one" href="#">Допомогти</a>
                        </div>
                      </div>
                </li>
                <li class="image-item">
                    <div class="problem__content">
                        <div class="problem__title">Problem Name</div>
                        <div class="problem__text">A brief description of the problem</div>
                        <div class="problems__btn">
                            <a class="btn--one donate__btn--one" href="#">Donate</a>
                            <a class="btn--one problem__btn--one" href="#">Допомогти</a>
                        </div>
                      </div>
                </li>
                <li class="image-item">
                    <div class="problem__content">
                        <div class="problem__title">Problem Name</div>
                        <div class="problem__text">A brief description of the problem</div>
                        <div class="problems__btn">
                            <a class="btn--one donate__btn--one" href="#">Donate</a>
                            <a class="btn--one problem__btn--one" href="#">Допомогти</a>
                        </div>
                      </div>
                </li>
                <li class="image-item">
                    <div class="problem__content">
                        <div class="problem__title">Problem Name</div>
                        <div class="problem__text">A brief description of the problem</div>
                        <div class="problems__btn">
                            <a class="btn--one donate__btn--one" href="#">Donate</a>
                            <a class="btn--one problem__btn--one" href="#">Допомогти</a>
                        </div>
                      </div>
                </li>
              </ul>
        </div>
      </div>

    );


  }