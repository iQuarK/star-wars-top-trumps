import React from "react";
import ReactDOM from "react-dom";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import sagas from "./sagas";
import createSagaMiddleware from "redux-saga";

import { ThemeProvider } from "styled-components";

import App from "./app/App";
import * as serviceWorker from "./serviceWorker";

const theme: object = {
  bg: "#282c34"
};

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
// mount it on the Store
const store = createStore(reducer, {}, applyMiddleware(sagaMiddleware));

// then run the saga
sagaMiddleware.run(sagas);

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
