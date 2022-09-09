import "./index.css";
import Anvesh from "./product";
import React, { useState } from "react";
import { data } from "./data";
import Cart from "./cart";

const ProductLists = () => {

    const [count,setCount]=useState(null)

    const addCount  = ()=>{
        setCount(count+1)
    }

    return (
        <React.Fragment>
           <Cart count={count}/>
            <div>
                <section className="booklist">
                    {data.map((val, key) => {
                        return (
                            <Anvesh
                                img={val.img}
                                productName={val.productName}
                                price={val.price}
                                key = {key}
                                addCount = {addCount}
                            ></Anvesh>
                        );
                    })}
                </section>
            </div>
        </React.Fragment>
    );
};
export default ProductLists;
