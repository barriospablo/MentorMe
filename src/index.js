import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootswatch/dist/superhero/bootstrap.min.css";
import "./firebase";
import { FirebaseAppProvider } from "reactfire";
// import { FireBaseAppProvider } from "reactfire";
const firebaseConf = {
  apiKey: "AIzaSyA3xEPEtj0puGKclTm71ho3LiE_hIhdrms",
  authDomain: "mentor-me-21484.firebaseapp.com",
  databaseURL: "https://mentor-me-21484.firebaseio.com",
  projectId: "mentor-me-21484",
  storageBucket: "mentor-me-21484.appspot.com",
  messagingSenderId: "8853289378",
  appId: "1:8853289378:web:78ef91ff5aebd29886dafb",
};
ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConf}>
      <Suspense fallback={<div>Loading... </div>}>
        <App />
      </Suspense>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
