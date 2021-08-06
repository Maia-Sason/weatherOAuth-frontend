import "./css/App.css";
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
import LayoutInfo from "./hoc/LayoutInfo";
import HomeAlt from "./containers/HomeAlt";
import Privacy from "./containers/Privacy";
import Sources from "./containers/Sources";
import Terms from "./containers/Terms";
import Login from "./containers/Login";
import All from "./containers/All.js";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["-apple-system", "Trebuchet", "BlinkMacSystemFont"],
  },
});

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Router>
            <Layout>
              <Route exact path="/login" component={Login} />
              <Route exact path="/" component={HomeAlt} />
              <Route exact path="/all" component={All} />
              <Route exact path="/privacy">
                <LayoutInfo>
                  <Privacy />
                </LayoutInfo>
              </Route>
              <Route exact path="/sources">
                <LayoutInfo>
                  <Sources />
                </LayoutInfo>
              </Route>
              <Route exact path="/terms">
                <LayoutInfo>
                  <Terms />
                </LayoutInfo>
              </Route>
            </Layout>
          </Router>
        </CssBaseline>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
