import React from "react";
import ReactDOM from "react-dom/client";
import "../../app.css";
import App from "../../App";
 
function Navbar () {
  const navbar = ReactDOM.createNavbar(
      document.getElementById("navbar")
  );
  navbar.render(
      <React.StrictMode>
          <App />
      </React.StrictMode>
  );
};
export default Navbar;