import { Fragment } from "react";
import { housingData } from "../data/content";
import { useParams,useLocation,  Route, Link, Routes } from "react-router-dom";
import {useRouteMatch} from 'react-router';

import { Details } from "./Details";

const Cards = (props) => {
    const {id} = useParams();
    const { pathname } = useLocation();
    console.log(pathname);
    return (
        <Fragment>
            <div className="row">
                {housingData.map(x => {
                    return (<div className="col-md-3 ">
                        <div className="card">
                            <img src={x.imageUrl} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">{x.location}</p>
                                <p className="card-text">{x.price}</p>
                                <p className="card-text">
                                    <Link to={`/home/${x.id}`}>Details</Link>
                                </p>
                            </div>
                        </div>
                    </div>)
                })}
            </div>
            {/* <Routes>
                <Route path={`home/:id`} element={<Details />}></Route>


            </Routes> */}
        </Fragment>)
};

export default Cards;