import React from "react";
  import "../scss/blockProblems.scss";
  import ProblemsList from'./problems/problemsList'
  
  export default function BlockProblems(){
    return (
        <div>
        <div className="problems__title">
          <h3>Перелік проблем</h3>
        </div>
<<<<<<< HEAD
        <ProblemsList />
      </div> 
=======
        <div className="first-row">
          <ProblemsList />
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

>>>>>>> b769f47c3877a23661893433a8c1f8867163ddf1
    );
  }