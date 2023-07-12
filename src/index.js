import React from 'react';
import ReactDOM from 'react-dom/client';
import Number3Class from './Number3 class';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Number3Class />
  </React.StrictMode>
);

/*
  리액트 컴포넌트 종류
  1. 클래스형 : class Component {render () {return "";}}
  2. 함수형 : function Component {return "";}
*/

reportWebVitals();
