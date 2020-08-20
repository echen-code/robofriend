import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import App from './App';
import Card from "./card";
import * as serviceWorker from "./serviceWorker";
import "tachyons";
import { robots } from "./robots";

ReactDOM.render(
  <div>
    <React.StrictMode>
      {/*< App/>*/}
      <Card id={robots[0].id} name={robots[0].name} quote={robots[0].quote} />,
      <Card id={robots[1].id} name={robots[1].name} quote={robots[1].quote} />,
      <Card id={robots[2].id} name={robots[2].name} quote={robots[2].quote} />,
      <Card id={robots[3].id} name={robots[3].name} quote={robots[3].quote} />,
    </React.StrictMode>
  </div>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
