import React from "react";

import firebase from "firebase";

import "../scss/loginPage.scss";
import "../scss/registrationPage.scss";

import HeaderNav from "./headerNav";
import Footer from "./footer";

export default function LoginPage() {
  function toggleSignIn() {
    if (firebase.auth().currentUser) {
      firebase.auth().signOut();
    } else {
      var email = document.getElementById("email").value;
      var password = document.getElementById("password").value;

      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        alert("Ваш email не валідний, спробуйте ще раз");
        return;
      }
      if (password.length < 4) {
        alert("Будь-ласка, введіть пароль");
        return;
      }
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(function (user) {
          console.log(firebase.auth().currentUser);
          window.location = "/";
        })
        .catch(function (error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          if (errorCode == "auth/weak-password") {
            alert("Занадто слабкий пароль");
          } else {
            alert(errorMessage);
          }
          console.log(error);
        });
    }
  }
  return (
    <div className="box login">
      <HeaderNav />
      <div className="main">
        <div className="title">
          <h1 className="signIn">Авторизація</h1>
        </div>
        <div className="content">
          <div className="left">
            <div className="operator">
              <span className="call">
                Вітаємо <br /> З поверненням
                <br /> <b>Раді вас бачити</b>
              </span>
            </div>
          </div>
          <div className="forms">
            <div className="form">
              <div className="inlineInpust">
                <input id="email" type="email" name="email" placeholder="Пошта" />
              </div>
              <input id="password" type="password" name="password" placeholder="Пароль" />
              <div className="submit">
                <button className="btn" type="submit" onClick={toggleSignIn}>
                  Відправити
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
