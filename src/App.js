import React, { Component } from "react";
import "./App.css";
import IterationSampleClass from "./IterationSampleClass";
//import { MyComponent } from './comp/MyComponent';

/*
  flasy
  false, null, undefined, '' , 0
*/
/*
function App() {
    const name = undefined;
    const styleMap = {
        backgroundColor: 'red',
        color: 'aqua',
        fontSize: '48px',
    };

    return (
        <div className="react">
            {name || <h1> undefined 입니다 </h1>}
            아이디 : <input name="uid" />
            {
                //라인 주석
            }
        </div>
    );
}
*/

class App extends Component {
  name = "멤버변수 홍길동";
  age = 20;
  scrollBox = React.createRef();
  render() {
    //    const name = '지역변수 홍길동';
    return (
      <div>
        <IterationSampleClass></IterationSampleClass>
      </div>
    );
  }
}
/*
function App() {
  const name = '홍길동';
  return <div className="react">{name}</div>;
}
*/
export default App;
