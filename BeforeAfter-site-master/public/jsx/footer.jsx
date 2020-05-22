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
<div className="footer__logo">
    <img src="img/png/logo.png" alt=""/>
  </div>

  <div className="footer__copyright">
    &copy; IT STEP UNIVERSITY
  </div>

  <div className="footer__icons">
    <div className="icon__instagram icons">
      <a href="#" className="icon__instagram">
        <img src="img/png/instagram.png" alt=""/>
      </a>
    </div>

    <div className="icon__telegram icons">
      <a href="#" className="icon__telegram">
        <img src="img/png/telegram.png" alt=""/>
      </a>
    </div>

    <div className="icon__linkedin icons">
      <a href="#" className="icon__linkedin">
        <img src="img/png/linkedin.png" alt=""/>
      </a>
    </div>

    <div className="icon__facebook icons">
      <a href="#" className="icon__facebook">
        <img src="img/png/facebook.png" alt=""/>
      </a>
    </div>

    <div className="icon__youtube icons">
      <a href="#" className="icon__youtube">
        <img src="img/png/youtube.png" alt=""/>
      </a>
    </div>

    <div className="icon__gmail icons">
      <a href="#" className="icon__gmail">
        <img src="img/png/gmail.png" alt=""/>
      </a>
    </div>

    <div className="icon__arrow1 icons">
      <a href="#" className="icon__arrow1">
        <img src="img/png/arrow1.png" alt=""/>
      </a>
    </div>
  </div>
  </div>
</footer>

      )
  }