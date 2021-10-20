/**
 * @description      :
 * @author           : Grant
 * @group            :
 * @created          : 18/10/2021 - 16:27:13
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 18/10/2021
 * - Author          : Grant
 * - Modification    :
 **/
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import About from "./Pages/About";
import Contacts from "./Pages/Contacts";
import Landing from "./Pages/Landing";
import Products from "./Pages/Products";
import Styles from "./Pages/Styles";
import Images from "./Pages/Images";
import SideBar from "./Components/SideBar";
import TopBar from "./Components/TopBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <Router>
    <TopBar />
    <SideBar />
    <div className="inline absolute p-4">
      <Switch>
        <Route exact path="/" children={<Landing />} />
        <Route exact path="/products" children={<Products />} />
        <Route exact path="/about" children={<About />} />
        <Route exact path="/contacts" children={<Contacts />} />
        <Route exact path="/images" children={<Images />} />
        <Route exact path="/styles" children={<Styles />} />
      </Switch>
    </div>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
