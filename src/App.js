import "./css/App.css";
import { useState, useEffect } from "react";
import axios from "axios";

// Material-UI
import { CssBaseline } from "@material-ui/core";

// Redux stuff
import { Provider } from "react-redux";
import store from "./store";

// Router
import { BrowserRouter as Router, Route } from "react-router-dom";

// Component import
import Layout from "./hoc/Layout";
import Home from "./containers/Home";
import Login from "./containers/Login";
import All from "./containers/All.js";

function App() {
  return (
    <Provider store={store}>
      <CssBaseline>
        <div>Hello</div>
        <Router>
          <Layout>
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={Home} />
            <Route exact path="/all" component={All} />
          </Layout>
        </Router>
      </CssBaseline>
    </Provider>
  );
}

export default App;
