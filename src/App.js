// import "./css/App.css";
import { useState, useEffect } from "react";
import axios from "axios";

// Material-UI
import { CssBaseline, ThemeProvider, createMuiTheme } from "@material-ui/core";

// Redux stuff
import { Provider } from "react-redux";
import store from "./store";

// Router
import { BrowserRouter as Router, Route } from "react-router-dom";

// Component import
import Layout from "./hoc/Layout";
import Home from "./containers/Home";
import HomeAlt from "./containers/HomeAlt";
import Login from "./containers/Login";
import All from "./containers/All.js";
import Navbar from "./components/Navbar.js";
import Navbar_old from "./components/Navbar_old";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Trebuchet", "BlinkMacSystemFont"],
  },
});

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Router>
            {/* <Navbar /> */}
            <Layout>
              <Route exact path="/login" component={Login} />
              <Route exact path="/" component={HomeAlt} />
              <Route exact path="/all" component={All} />
            </Layout>
          </Router>
        </CssBaseline>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
