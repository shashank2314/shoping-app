import {MdDelete} from "react-icons/md"
import { RemoveToCart } from "../redux/slices/Shopslice";
import { useDispatch } from "react-redux";

export default function CartProductCard({ product }) {
    const dispatch = useDispatch();
    return (
        <div className="CartCardDiv">
            <img className="CcardImage" src={product.image} alt="img" loading="lazy" />
            <div>
                <h2 className="CcardHeading">{product.title}</h2>
                <p className="CcardDesc">{product.description.substring(0, 60) + "..."}</p>
                <div className="CcardpriceDiv" >
                    <div className="HcardPrice">${product.price}</div>
                    <div className="Delete_icon" onClick={()=>dispatch(RemoveToCart(product.id))}><MdDelete/></div>
                </div>
            </div>
        </div>
    );
}