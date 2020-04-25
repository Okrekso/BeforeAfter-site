import React, {
    useState,
    useContext,
    useEffect,
    useCallback,
    useMemo
  } from "react";
import ProblemsItem from './problemsItem'


const firebase = require("firebase");
require("firebase/firestore");
firebase.initializeApp({
  apiKey: "AIzaSyC31PDyS0jn_lHPFNJ36Kw32V2CEFSPs5A",
  authDomain: "beforeandafterapplication.firebaseapp.com",
  databaseURL: "https://beforeandafterapplication.firebaseio.com",
  projectId: "beforeandafterapplication",
  storageBucket: "beforeandafterapplication.appspot.com",
  messagingSenderId: "495897903913",
  appId: "1:495897903913:web:935e90aadfbc52f787ed38",
  measurementId: "G-JJ00WXPP8M"
});
let db = firebase.firestore();



function ProblemsList(){
    const [problems, setProblems] = useState([]);

    useEffect(() => {
    db.collection('problems').get().then((querySnapshot) => {
    let problems = [];
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
            let problem = {id:doc.id, 
                ...doc.data()};
                problems.push(problem);
  });
  setProblems(problems);
});
    },[]);
    return(
        <ul className="image-items">
            {problems.map(item =>{
                console.log(item);
                return <ProblemsItem key={item.id}  item={item} />
            })}
        </ul>
    );
}
export default ProblemsList;