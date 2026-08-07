import { useParams } from "react-router-dom";

function ProductDetails() {

    const { productId } = useParams();

    return (

        <>

            <h1>Product Details</h1>

            <h2>Product ID : {productId}</h2>

        </>

    );

}

export default ProductDetails;