import "./App.css";
import { Provider } from "react-redux";
import store from "../src/redux/store";
import Counter from "./Counter";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter></Counter>
      </div>
    </Provider>
  );
}

export default App;
