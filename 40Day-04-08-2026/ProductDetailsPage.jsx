import { useParams } from "react-router-dom";

function ProductDetailsPage() {

    const { productId } = useParams();

    return (

        <div>

            <h2>Product Details</h2>

            <p>Selected Product Id : {productId}</p>

        </div>

    );

}

export default ProductDetailsPage;