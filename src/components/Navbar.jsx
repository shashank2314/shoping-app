import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import {AiOutlineShoppingCart} from "react-icons/ai"
import { useState } from "react";
import { useSelector } from "react-redux";
export default function Navbar(){
    const cart = useSelector((state) => state.shopslice);
    const navigate = useNavigate();
    const [Hover,sethover] = useState(false);
    return (
    <div className="NavbarDiv">
        <div><img onClick={()=>navigate("/")} className="NavbarLogo" src={logo}/></div>
        <div className="nb_Homecart_Div">
            <div onClick={()=>navigate("/")} className="NavHome">Home</div>
            <div onClick={()=>navigate("/cart")} className="CartAiDIv"><div className="CardAi"><AiOutlineShoppingCart/></div><span className="CartSize">{cart.length}</span></div>
        </div>
    </div>
    );
}