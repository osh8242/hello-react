import React from "react";

const ListComponent = (props) => {
  const removeProcess = (item) => {
    if (
      window.confirm(
        '"' + item.id + "번 " + item.text + '"을 삭제하시겠습니까?'
      )
    ) {
      props.remove(item.id);
    }
  };
  const namesList = props.names.map((item) => (
    <li key={item.id} onDoubleClick={(e) => removeProcess(item)}>
      {item.id} : {item.text}
      <button onClick={(e) => removeProcess(item)}>삭제</button>
    </li>
  ));
  return <ul>{namesList}</ul>;
};

export default ListComponent;
