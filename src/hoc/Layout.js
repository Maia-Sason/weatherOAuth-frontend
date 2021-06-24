import { connect } from "react-redux";
import { checkAuthenticated } from "../actions/user";
import { Redirect } from "react-router-dom";
import { useState, useEffect } from "react";

function Layout({ children, isAuthenticated, checkAuthenticated }) {
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    // It worked it worked!
    await checkAuthenticated();
    setLoading(true);
  }, []);

  return <>{loading ? children : "...loading"}</>;
}

const mapStatetoProps = (state) => ({
  isAuthenticated: state.user.isAuthenticated,
});

export default connect(mapStatetoProps, { checkAuthenticated })(Layout);
