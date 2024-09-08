import { createStore, combineReducers } from "redux";

//combine Reducers

const appReducer = combineReducers({
  value,
  showLabel,
});
// const initialState = {
//   value: 0,
//   showLabel: true,
// };

// function appReducer(prevState = initialState, action) {
//   return {
//     value: valueReducer(prevState.value, action),
//     showLabel: showLabelReducer(prevState.showLabel, action),
//   };
// }

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

function value(prevState = 0, action) {
  switch (action.type) {
    case "increment":
      return prevState + 1;
    case "decrement":
      return prevState - 1;

    default:
      return prevState;
  }
}

function showLabel(prevState = true, action) {
  switch (action.type) {
    case "showLabel":
      return action.payload;
    default:
      return prevState;
  }
}

//Action creator

function increment() {
  return {
    type: "increment",
  };
}

function decrement() {
  return {
    type: "decrement",
  };
}

function setShowLabel(payload) {
  return {
    type: "showLabel",
    payload
  };
}
const store = createStore(appReducer);

export { increment, decrement, setShowLabel };

export default store;
