import { useDispatch,useSelector } from "react-redux";
import React from "react";
import { AddToCart, RemoveToCart } from "../redux/slices/Shopslice";
import { useState } from "react";
export default function HomeProductCard({ product }) {
    const cart = useSelector((state) => state.shopslice);
    const [Hover,sethover] = useState(false);
    const dispatch = useDispatch();
    function RemoveHandler(){
        console.log("removeHandler")
        dispatch(RemoveToCart(product.id));
        console.log(cart);
    }
    function AddHandler(){
        console.log("addHandler")
        dispatch(AddToCart(product));
        console.log(cart);
    }
    function someHandler(p){
        return p.id == product.id;
    }
    return (
        <div className={Hover?"activeSize HomecardDiv":" HomecardDiv"} onMouseOver={()=>sethover(true)} onMouseOut={()=>sethover(false)}>
            <div className="HomecardDiv1">
                <div className="HcardheadingDiv">
                    <h2 className="HcardHeading">{product.title.substring(0, 16)}</h2>
                    <span>...</span>
                </div>
                <p className="HcardDesc">{product.description.substring(0, 65) + "..."}</p>
                <img className="HcardImage" src={product.image} alt="img" loading="lazy" />
            </div>
            <div className="HcardPriceDiv">
                <div className="HcardPrice">${product.price}</div>
                {   cart == null ? <button className="Hcardbtn" onClick={AddHandler}>Add To Cart</button>:(
                    cart.some(someHandler) ? 
                    <button className="Hcardbtn" onClick={RemoveHandler}>Remove To Cart</button> 
                    :<button className="Hcardbtn" onClick={AddHandler}>Add To Cart</button>)
                }
            </div>
        </div>
    );
}