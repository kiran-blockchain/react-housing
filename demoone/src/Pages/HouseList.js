import { Route, Routes } from "react-router"
import Cards from "../components/Cards"
import { Details } from "../components/Details"

export const HouseList = () => {
    return (
        <div>
            <Cards />
            <Routes>
                <Route path={`/home/:id`} element={<Details />}></Route>
            </Routes>
        </div>
    )
}