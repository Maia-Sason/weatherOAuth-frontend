import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { useEffect } from "react";

function Home({ isAuthenticated }) {
  useEffect(() => {
    if (isAuthenticated) {
      getUserLocation();
    }
  });

  if (!isAuthenticated) {
    return <Redirect push to="/login" />;
  }

  const getUserLocation = () => {
    function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      console.log(`Postion: ${latitude}, ${longitude}`);
    }

    function error() {
      console.error("Issue retrieving location!");
    }

    if (!navigator.geolocation) {
      console.log("Geolocation not supported by your browser");
    } else {
      console.log("Locating ...");
      navigator.geolocation.getCurrentPosition(success, error);
    }
  };

  return (
    <div>
      Here we will ask current user permission to view location and retrieve
      current weather data. Display current weather data here.
    </div>
  );
}

const mapStatetoProps = (state) => ({
  isAuthenticated: state.user.isAuthenticated,
});

export default connect(mapStatetoProps)(Home);
