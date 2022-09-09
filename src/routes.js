import React from "react";
import ProductLists from "./productlist";
import {Route, Routes} from "react-router";

const Routess = ()=>{
    return(
        <div>
            <Routes>
                <Route path="/" element = {<ProductLists/>}>
                </Route>
            </Routes>
        </div>
    )
}
export default Routess