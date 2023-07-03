import { selectAllProudcts } from "./productSlice";

const proudctsList = () => {
    const products = selectAllProudcts();

    return (
        <tbody>
            {products.map((product) => {
                const { image, name, price, bundle} = product;
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
                            {bundle}
                        </td>
                    </tr>
                )
            })}
        </tbody>
    );
};

export default proudctsList;