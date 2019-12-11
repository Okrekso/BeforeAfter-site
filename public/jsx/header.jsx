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
            <div class="container">
        <nav class="main-menu">
            <div class="header__logo logo">
                <a href="#" class="logo__link">
                  <img src="img/png/logo.png" alt="" class="logo__img" />
                </a>
              </div>
              <div class="main-menu__links">
                  <a class="nav__link" href="#">Про нас</a>
                  <a class="nav__link" href="#list__problem">Проблеми</a>
                  <a class="nav__link" href="#">Donate</a>
              </div>
          <div class="header__person">
              <a href="#" class="person__link">
                <img src="img/png/user.png" alt="" class="person__img" />
              </a>
            </div>
        </nav>
      <div class="header__title">
          <p>Зроби місто кращим</p>
          <p>почавши із себе</p>
      </div>
      <div class="header__btn">
          <a class="btn problem__btn" href="#">Donate</a>
      </div>
        <div class="block__arrow">
            <a class="arrow" href="#block__map">  
                <h4 class="arrow__title">Карта проблем</h4>      
                <img src="img/png/arrow.png" alt="" class="header__arrow"></img>
            </a>
        </div>
    </div>
    </header>
  );
}
