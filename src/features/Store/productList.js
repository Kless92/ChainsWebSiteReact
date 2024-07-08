import { useContext } from "react";
import { selectAllProudcts } from "./productSlice";
import { ShopContext } from "../../app/context/shop-context";

const ProudctsList = () => {
    const products = selectAllProudcts();
    const { addToCart, cartItems } = useContext(ShopContext);

    return (
        <>
            {products.map((product) => {
                const { id, image, name, price, bundle} = product;
                const cartItemAmount = cartItems[id]
                return (
                    <tbody class="price-border">
                    <tr>
                        <td>
                            <img class='reSize' src={image} alt={name}/>
                            <br/>
                            {name}
                        </td>
                        <td>
                            {price}
                            <br/>
                            {bundle}
                        </td>
                        <td>
                            <button className="addToCartButton" onClick={() => addToCart(id)}>
                                <i className='fa fa-shopping-cart fa-lg'/>
                                Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
                            </button>
                        </td>
                    </tr>
                    </tbody>
                )
            })}
        </>
    );
};

export default ProudctsList;