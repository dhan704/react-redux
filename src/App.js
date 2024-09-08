import "./App.css";
import { Provider } from "react-redux";
import store from "../src/redux/store";
// import Counter from "./components/Counter";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Headers from "./components/Headers";
import Settings from "./components/Settings";
import Counter from "./components/Counter";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Headers />}>
            <Route index element={<Home />}></Route>
            <Route path="settings" element={<Settings />}></Route>
            <Route path="counter" element={<Counter />}></Route>
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
