import { useSelector } from "react-redux";
import CartProductCard from "./CartProductCard";
import CartSidePanel from "./CartSidePanel";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
export default function Cart(){
    const [totalAmount, setTotalAmount] = useState(0);
    const cart  = useSelector((state) => state.shopslice);
    useEffect(()=>{
        setTotalAmount(cart.reduce((acum,curr)=>{
            return acum + (curr.price);
        },0)) }, [cart]);
    const navigate = useNavigate();
    return (
    <div className="CardDiv">
        {
            cart.length === 0 ? (
                <div className="CardEmptyDiv">
                    <p className="CsItems">Your Cart is empty!</p>
                    <button className="Greenbtn" onClick={()=>navigate("/")}>Shop Now</button>
                </div>
            ):
            (
                <div className="CardDiv2">
               <div>
                        {
                            cart.map((product)=><div>
                                <CartProductCard key={product.id} product={product}/>
                                <hr/>
                                </div>
                            )
                        }
                    </div>
                    <CartSidePanel totalAmount={ Math.round(totalAmount * 100) / 100}/>
                </div>
            )
        }
    </div>
    );
}