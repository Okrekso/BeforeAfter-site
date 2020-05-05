import React from "react";

import firebase from "firebase";

import "../scss/registrationPage.scss";

import HeaderNav from "./headerNav";
import Footer from "./footer";

export default function RegistrationPage() {
  function handleSignUp() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var nameOfUser = document.getElementById("nameOfUser").value;
    var nameOfProject = document.getElementById("nameOfProject").value;
    var phone = document.getElementById("phone").value;

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      alert("Ваш email не валідний, спробуйте ще раз");
      return;
    }
    switch (0) {
      case nameOfUser.length:
        alert("Будь-ласка, введіть ваше ім'я");
        break;
      case phone.length:
        alert("Будь-ласка, введіть телефон");
        break;
      case password.length:
        alert("Будь-ласка, введіть пароль");
        break;
      case nameOfProject.length:
        alert("Будь-ласка, введіть назву проекту");
        break;
      default:
        break;
    }

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(function (user) {
        window.location = "/login";
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
  return (
    <div className="box">
      <HeaderNav />
      <div className="main">
        <div className="title">
          <h1 className="signIn">Записатись на проект</h1>
        </div>
        <div className="content">
          <div className="left">
            <div className="operator">
              <span className="call">
                До вас <br /> зателефонує <br /> <b>оператор</b>
              </span>
            </div>
          </div>
          <div className="forms">
            <div className="form">
              <input id="nameOfUser" type="text" name="nameOfUser" placeholder="Ім'я Прізвище" />
              <div className="inlineInpust">
                <input id="phone" type="tel" name="phone" placeholder="Телефон" />
                <input id="email" type="email" name="email" placeholder="Пошта" />
              </div>
              <div className="inlineInpust">
                <input id="password" type="password" name="password" placeholder="Пароль" />
                <input id="nameOfProject" type="text" name="nameOfProject" placeholder="Назва проекту" />
              </div>
              <div className="submit">
                <button className="btn" type="submit" onClick={handleSignUp}>
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
