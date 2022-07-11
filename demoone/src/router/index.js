import { Route, Router, Routes } from "react-router"
import { BrowserRouter } from "react-router-dom"
import App from "../App"
import Cards from "../components/Cards"
import Register from "../components/Signup"

export const CustomRouter = () => {
    return <BrowserRouter>
        <Routes>

            <Route path="/" element={App} />
            <Route path="/register" element={Register}></Route>

        </Routes>
    </BrowserRouter>
}