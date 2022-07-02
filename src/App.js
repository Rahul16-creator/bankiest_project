import React, { Component } from "react";
import Pages from "./views/page";
import "./App.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducer";
class App extends Component {

  render() {
   let store= createStore(reducer)

    return (
      <Provider store={store}>
        <Pages />
      </Provider>
    );
  }
}

export default App;
