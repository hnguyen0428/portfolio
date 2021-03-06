import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import DesktopHome from './renders/Home';
import * as serviceWorker from './serviceWorker';
import {Route, HashRouter} from "react-router-dom";
import history from "./renders/history";
import Login from "./renders/Login";


ReactDOM.render(
  <HashRouter history={history}>
    <Route exact path={"/"} component={DesktopHome}/>
    <Route exact path={"/login"} component={Login}/>
  </HashRouter>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
