import React from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactGA from "react-ga";
import Mother from "./Mother";

// initialize Google Analytics
ReactGA.initialize("UA-157815738-1");
ReactGA.pageview(window.location.pathname + window.location.search);

// Possible tracking events
// ReactGA.event({
//   category: 'User',
//   action: 'Sent message'
// });

function App() {
  return <Mother />;
}

export default App;
