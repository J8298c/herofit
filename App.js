import React, { Component } from "react";
import { Provider } from "react-redux";
import MainRouter from "./src/MainRouter";
import store from "./src/redux/store";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainRouter />
      </Provider>
    );
  }
}
