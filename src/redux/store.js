import { createStore } from "redux";

const initialState = {
  value: 0,
  showLabel: true,
};

function appReducer(prevState = initialState, action) {
  return {
    value: valueReducer(prevState.value, action),
    showLabel: showLabelReducer(prevState.showLabel, action),
  };
}

// function appReducer(prevState = initialState, action) {
//   switch (action.type) {
//     case "increment":
//       return {
//         ...prevState,
//         value: prevState.value + 1,
//       };
//     case "decrement":
//       return {
//         ...prevState,
//         value: prevState.value - 1,
//       };
//     case "showLabel":
//       return {
//         ...prevState,
//         showLabel: action.payload,
//       };
//     default:
//       return prevState;
//   }
// }

function valueReducer(prevState = 0, action) {
  switch (action.type) {
    case "increment":
      return prevState + 1;
    case "decrement":
      return prevState - 1;

    default:
      return prevState;
  }
}

function showLabelReducer(prevState = true, action) {
  switch (action.type) {
    case "showLabel":
      return action.payload;
    default:
      return prevState;
  }
}
const store = createStore(appReducer);

export default store;
