import Cards from "./components/Cards";
import NavBar from "./components/NavBar";
import Greetings from "./Greetings";
import { housingData } from "./data/content"
import Grid from "./components/grid";
import Search from "./components/Search";
import Checkbox from "./components/Checkbox";
import { useState } from "react";
import Dropdown from "./components/Dropdown";
import ThemeContext from "./context/themeContext";
import Layout from "./components/Layout";
import  Register  from "./components/Register";
const App = (props) => {
  const companyName = 'Housing.com';

  const [readyToBuy, setReadyToBuy] = useState(0);
  const addHouseToBuy = (param) => {
    setReadyToBuy(readyToBuy + 1);
  };
  const removeHouseToBuy = (param) => {
    setReadyToBuy(readyToBuy - 1);
  }
  const [appTheme, setAppTheme] = useState('Light')
  const value = { appTheme, setAppTheme };
  
  return (

    <ThemeContext.Provider value={value}>
      <div className="container" >
        <Layout>
          <NavBar />
          <Register/>
        </Layout>
      </div>
    </ThemeContext.Provider>

  )
}

export default App;