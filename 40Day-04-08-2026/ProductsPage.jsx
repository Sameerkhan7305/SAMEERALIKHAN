import { Link } from "react-router-dom";

function ProductsPage() {

    return (

        <div>

            <h2>Products Page</h2>

            <p>Select Any Product</p>

            <hr />

            <Link to="/dashboard/products/101">

                Laptop

            </Link>

            <br /><br />

            <Link to="/dashboard/products/102">

                Mobile

            </Link>

            <br /><br />

            <Link to="/dashboard/products/103">

                Headphones

            </Link>

        </div>

    );

}

export default ProductsPage;