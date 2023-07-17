import { useReducer } from "react";
function reducer(state, action) {
  let newNames = [];
  switch (action.type) {
    case "remove":
      newNames = state.names.filter((item) => item.id !== action.id);
      return { names: newNames };
    case "insert":
      let id = 0;
      if (state.names.length === 0) id++;
      else id = state.names[state.names.length - 1].id + 1;

      newNames = state.names.concat({ id: id, text: action.text });
      return { names: newNames };
    default:
      return state;
  }
}

const useIterationSampleModel = (initData) => {
  const [state, dispatch] = useReducer(reducer, initData);

  const handlerRemove = (id) => {
    dispatch({ type: "remove", id: id });
  };
  const handlerInsert = (inputText) => {
    dispatch({ type: "insert", text: inputText });
  };

  return [state, handlerRemove, handlerInsert];
};

export default useIterationSampleModel;
