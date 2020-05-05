import React from "react";

import  firebase  from "firebase";

import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";

import "../scss/header.scss";

export default function HeaderNav() {
  const [open, setOpen] = React.useState(false);
  const [isLogged, setIsLogged] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  window.onload = function(){
    if (firebase.auth().currentUser != null) {
        setIsLogged(true);
      }
    }

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <nav className="main-menu">
      <div className="header__logo logo">
        <a href="#" className="logo__link">
          <img src="img/png/logo.png" alt="" className="logo__img" />
        </a>
      </div>
      <div className="main-menu__links">
        <a className="nav__link" href="#">
          Про нас
        </a>
        <a className="nav__link" href="#list__problem">
          Проблеми
        </a>
        <a className="nav__link" href="#">
          Donate
        </a>
        {!isLogged ? (
        <div>
          <Button
            ref={anchorRef}
            aria-controls={open ? "menu-list-grow" : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
            className="nav__link auth"
          >
            Авторизація/Реєстрація
          </Button>
          <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{ transformOrigin: placement === "bottom" ? "center top" : "center bottom" }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                      <MenuItem onClick={handleClose}>
                        <a className="toAuth" href="/login">
                          Авторизація
                        </a>
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        <a className="toAuth" href="/registration">
                          Реєстрація
                        </a>
                      </MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
        ) : ( "" )}
        {isLogged ? (
          <a className="nav__link" href="/" onClick={firebase.auth().signOut()}>
            Вихід
          </a>
        ) : (
          ""
        )}
      </div>
      <div className="header__person">
        <a href="/my-account" className="person__link">
          <img src="img/png/user.png" alt="" className="person__img" />
        </a>
      </div>
    </nav>
  );
}
