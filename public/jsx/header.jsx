import React, {
  useState,
  useContext,
  useEffect,
  useCallback,
  useMemo
} from "react";
import "../scss/header.scss";

export default function Header() {
  return (
    <header>
            <div className="container">
        <nav className="main-menu">
            <div className="header__logo logo">
                <a href="#" className="logo__link">
                  <img src="./img/png/LOGO2.PNG" alt="" className="logo__img" />
                </a>
              </div>
              <div className="main-menu__links">
                  <a className="nav__link" href="#">Про нас</a>
                  <a className="nav__link" href="#list__problem">Проблеми</a>
                  <a className="nav__link" href="#">Donate</a>
              </div>
          <div className="header__person">
              <a href="/my-account" className="person__link">
                <img src="img/png/user.png" alt="" className="person__img" />
              </a>
            </div>
        </nav>
      <div className="header__title">
          <p>Зроби місто кращим</p>
          <p>почавши із себе</p>
      </div>
      <div className="header__btn">
          <a className="btn problem__btn" href="#">Donate</a>
      </div>
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
