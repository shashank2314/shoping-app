import { products } from "../data";
import HomeProductCard from "./HomeProductCard";

export default function Home(){
    return (
    <div className="HomeDiv">{
            products.map((product)=>
                <HomeProductCard product = {product} key={product.id}/>
            )
        }
    </div>
    );
}