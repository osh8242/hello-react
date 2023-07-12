import { Component } from "react";
import "./App.css";
import Number3Class from "./Number3Class";
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
  render() {
    //    const name = '지역변수 홍길동';
    const map = { a: 1, b: 1, c: 1 };
    return (
      <div className="react">
        <Number3Class map={map} />
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
