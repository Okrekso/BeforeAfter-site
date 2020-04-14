(function () {



    const config = {
        apiKey: "AIzaSyC31PDyS0jn_lHPFNJ36Kw32V2CEFSPs5A",
        authDomain: "beforeandafterapplication.firebaseapp.com",
        databaseURL: "https://beforeandafterapplication.firebaseio.com",
        storageBucket: "beforeandafterapplication.appspot.com",
    };
    firebase.initializeApp(config);


    //Login Page
    const txtEmail = document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPassword');
    const btnLogin = document.getElementById('btnLogin');
    const btnSignUp = document.getElementById('btnSignUp');
    const btnLogOut = document.getElementById('btnLogOut');


    //Настройка залогінення
    btnLogin.addEventListener('click', e => {
        //Get email and pass
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();
        //Sign in
        const promise = auth.signInWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));
    })

    //Signup page
    btnSignUp.addEventListener('click', e => {
        //Get email and pass
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();
        //Sign in
        const promise = auth.createUserWithEmailAndPassword(email, pass);
        promise
            .catch(e => console.log(e.message));

    })

    btnLogOut.addEventListener('click', e=>{
        firebase.auth().signOut();
    })



    //Add a realtime listener
    firebase.auth().onAuthStateChanged(firebase => {
        if (firebaseUser) {
            console.log(firebaseUser);
            btnLogOut.classList.remove('hide');
        } else {
            console.log('not logged in');
            btnLogOut.classList.add('hide');
        }
    })



}());




