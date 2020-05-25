import React, {
  useState,
  useContext,
  useEffect,
  useCallback,
  useMemo
} from "react";
import "../scss/header.scss";
import HeaderNav from "./headerNav";

export default function Header() {
  return (
    <header>
        <div className="container">
        <HeaderNav />
      <div className="header__title">
          <p>Зроби місто кращим</p>
          <p>почавши із себе</p>
      </div>
      {/* <div className="header__btn">
          <a className="btn problem__btn" href="#">Dona9876te</a>
      </div> */}
        <div className="block__arrow">
            <a className="arrow" href="#block__map">  
                <h4 className="arrow__title">Карта проблем</h4>      
                <img src="img/png/arrow.png" alt="" className="header__arrow"></img>
            </a>
        </div>
    </div>
    </header>
  );
}
