import React from "react";
import ReactDOM from "react-dom/client";
import Number3Class from "./Number3Class";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import EventPracticeFunction from "./EventPracticeFunction";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <EventPracticeFunction />
  </React.StrictMode>
);

/*
  리액트 컴포넌트 종류
  1. 클래스형 : class Component {render () {return "";}}
  2. 함수형 : function Component {return "";}
*/

reportWebVitals();
