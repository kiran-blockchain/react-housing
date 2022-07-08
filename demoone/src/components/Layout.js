import { useContext } from "react"
import ThemeContext from "../context/themeContext"
import NavBar from "./NavBar";

const Layout = ({ children }) => {
    const { appTheme } = useContext(ThemeContext);
    console.log(appTheme);
    return (
        <div>
            {children}
        </div>
    )

}

export default Layout;