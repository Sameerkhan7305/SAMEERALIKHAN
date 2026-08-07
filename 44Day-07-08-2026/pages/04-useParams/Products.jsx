import { Link } from "react-router-dom";

function Products() {

    return (

        <>

            <h1>Products Page</h1>

            <Link to="/products/101">

                Laptop

            </Link>

            <br />

            <Link to="/products/102">

                Mobile

            </Link>

            <br />

            <Link to="/products/103">

                Headphones

            </Link>

        </>

    );

}

export default Products;