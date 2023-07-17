import React from "react";
import InputComponent from "./InputComponent";
import ListComponent from "./ListComponent";
import useIterationSampleModel from "./useIterationSampleModel";

const initData = {
  names: [
    { id: 1, text: "눈사람" },
    { id: 2, text: "얼음" },
    { id: 3, text: "눈" },
    { id: 4, text: "바람" },
  ],
};

const IterationSample = () => {
  const [state, handlerRemove, handlerInsert] =
    useIterationSampleModel(initData);

  return (
    <div>
      <InputComponent handlerInsert={handlerInsert} />
      <ListComponent handlerRemove={handlerRemove} names={state.names} />
    </div>
  );
};

export default IterationSample;
