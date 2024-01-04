import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function CartSidePanel({totalAmount}) {

    const cart  = useSelector((state) => state.shopslice);

return (
    <div className="CsPanalDiv">
        <div>
            <h2 className="Cspheading">Your Cart</h2>
            <div className="CsDesc">Summary</div>
            <p className="CsItems">Total items: {cart.length-1}</p>
        </div>
        <div>
            <div className="CsItems">
                Total amount: <b>${
                    totalAmount
                }</b>
            </div>
            <button className="Greenbtn">Checkout Now</button>
        </div>

    </div>
);
}