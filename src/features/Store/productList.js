import { useContext } from "react";
import { selectAllProudcts } from "./productSlice";
import { ShopContext } from "../../app/context/shop-context";

const ProudctsList = () => {
    const products = selectAllProudcts();
    const { addToCart, cartItems } = useContext(ShopContext);

    return (
        <tbody class="price-border">
            {products.map((product) => {
                const { id, image, name, price, bundle} = product;
                const cartItemAmount = cartItems[id]
                return (
                    <tr>
                        <td>
                            <img class='reSize' src={image} alt={name}/>
                            <br/>
                            {name}
                        </td>
                        <td>
                            {price}
                            <br/>
                            <button className="addToCartButton" onClick={() => addToCart(id)}>
                                <i className='fa fa-shopping-cart fa-lg'/>
                                Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
                            </button>
                        </td>
                        <td>
                        {bundle}
                            <br/>
                            <button className="addToCartButton" onClick={() => addToCart(id)}>
                                <i className='fa fa-shopping-cart fa-lg'/>
                                Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
                            </button>
                        </td>
                    </tr>
                )
            })}
        </tbody>
    );
};

export default ProudctsList;