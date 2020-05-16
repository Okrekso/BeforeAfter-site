import React from "react";
  import "../scss/blockProblems.scss";
  import ProblemsList from'./problems/problemsList'
  
  export default function BlockProblems(){
    return (
        <div>
        <div className="problems__title">
          <h3>Перелік проблем</h3>
        </div>
        <ProblemsList />
      </div> 
    );
  }