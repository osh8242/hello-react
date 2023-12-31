import React, { useState } from "react";

const InputComponent = (props) => {
  //입력창 state
  const [inputText, setInputText] = useState("");

  //입력값이 들어올 때
  const handlerChange = (e) => {
    setInputText(e.target.value);
  };

  //입력값 제출시
  const handlerSubmit = (e) => {
    e.preventDefault();
    props.handlerInsert(inputText);
    setInputText("");
  };

  return (
    <div>
      <input onChange={handlerChange} value={inputText}></input>
      <button onClick={handlerSubmit}>추가</button>
    </div>
  );
};

export default InputComponent;
