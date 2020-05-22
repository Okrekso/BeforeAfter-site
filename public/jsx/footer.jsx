import React, {
    useState,
    useContext,
    useEffect,
    useCallback,
    useMemo
  } from "react";
  import "../scss/footer.scss"

  export default function Footer(){
      return(
          
<footer className="footer">
    <div className="container">

  <div className="footer__copyright">
    <h1>Before & After 2020</h1>
    <span>all rights reserved</span>
  </div>

  <div className="footer__icons">
    <div className="icon__instagram icons">
      <a href="#" className="icon__instagram">
        <img src="img/png/instagram1.png" alt=""/>
      </a>
    </div>

    <div className="icon__telegram icons">
      <a href="#" className="icon__telegram">
        <img src="img/png/telegram1.png" alt=""/>
      </a>
    </div>

    <div className="icon__twitter icons">
      <a href="#" className="icon__twitter">
        <img src="img/png/twitter.png" alt=""/>
      </a>
    </div>

    <div className="icon__youtube icons">
      <a href="#" className="icon__youtube1">
        <img src="img/png/youtube1.png" alt=""/>
      </a>
    </div>

    <div className="icon__facebook icons">
     <a href="#" className="icon__facebook">
       <img src="img/png/facebook1.png" alt="" />
     </a>
    </div>

   
  </div>
  </div>
</footer>

      )
  }