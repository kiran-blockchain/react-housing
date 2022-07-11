import { useContext } from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import ThemeContext from "../context/themeContext";
import NavLink from "./NavLink";
import ThemeButton from "./Theme";

const NavBar = (props) => {
  //const { appTheme } = useContext(ThemeContext);
  let navBarClass = 'navbar navbar-expand-lg navbar-dark bg-primary'
  // if (appTheme == 'Dark') {
  //   navBarClass = " navbar navbar-expand-lg navbar-dark bg-dark"
  // }
  // else {
  //   navBarClass = 'navbar navbar-expand-lg navbar-dark bg-primary'
  // }
  return (
    <>
      <nav className={navBarClass}>
        <div class="container-fluid">
          <a class="navbar-brand" href="#">{props.companyName}</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarColor01">
            <ul class="navbar-nav me-auto">
            <Link to="/home">
                <NavLink name={"Home"} />
              </Link>
              <Link to="/login">
                <NavLink name={"Login"} />
              </Link>
              <Link to="/register">
                <NavLink name={"Register"}/></Link>
            </ul>
            <span class="badge bg-secondary">Selected Houses {props.readyToBuy}</span>
            {/* <ThemeButton></ThemeButton> */}
          </div>
        </div>
      </nav>
      
    </>
  );
};

export default NavBar;