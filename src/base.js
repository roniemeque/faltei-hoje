import Rebase from "re-base";
import firebase from "firebase/app";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB01aho8ddGLGYLH738BGYgmYACPUdifm0",
  authDomain: "faltei-hoje.firebaseapp.com",
  databaseURL: "https://faltei-hoje.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
