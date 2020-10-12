import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import createHistory from "history/createHashHistory";
import Full from "./containers/Full";
import styles from "turtle-ui";
import "./base.css";

const history = createHistory();

const App = () => (
  <Router history={history}>
    <Switch>
      <Route path="/" component={Full} />
    </Switch>
  </Router>
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
