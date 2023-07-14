import React from "react";

const ListComponent = (props) => {
  const namesList = props.names.map((item) => (
    <li key={item.id} onDoubleClick={(e) => props.handlerRemove(item.id)}>
      {item.id} : {item.text}
      <button onClick={(e) => props.handlerRemove(item)}>삭제</button>
    </li>
  ));
  return <ul>{namesList}</ul>;
};

export default ListComponent;
