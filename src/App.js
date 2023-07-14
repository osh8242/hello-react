import React, { useState } from "react";
import InputComponent from "./InputComponent";
import ListComponent from "./ListComponent";

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

const App = () => {
  const [names, setNames] = useState([
    { id: 1, text: "눈사람" },
    { id: 2, text: "얼음" },
    { id: 3, text: "눈" },
    { id: 4, text: "바람" },
  ]);

  const handlerRemove = (row) => {
    if (
      window.confirm('"' + row.id + "번 " + row.text + '"을 삭제하시겠습니까?')
    ) {
      setNames(names.filter((item) => item.id !== row.id));
    }
  };

  const handlerInsert = (inputText) => {
    setNames(
      names.concat({ id: names[names.length - 1].id + 1, text: inputText })
    );
  };

  return (
    <div>
      <InputComponent handlerInsert={handlerInsert} />
      <ListComponent handlerRemove={handlerRemove} names={names} />
    </div>
  );
};
/*
function App() {
  const name = '홍길동';
  return <div className="react">{name}</div>;
}
*/
export default App;
