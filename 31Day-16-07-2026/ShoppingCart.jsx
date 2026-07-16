import { useReducer } from "react";

const initialCart = {

  items: 0

};

function cartReducer(state, action) {

  switch (action.type) {

    case "ADD_ITEM":

      return {

        items: state.items + 1

      };

    case "REMOVE_ITEM":

      return {

        items: state.items - 1

      };

    case "CLEAR_CART":

      return {

        items: 0

      };

    default:

      return state;

  }

}

function ShoppingCart() {

  const [cart, dispatch] = useReducer(

    cartReducer,

    initialCart

  );

  return (

    <>

      <h1>Cart Items : {cart.items}</h1>

      <button
        onClick={() =>
          dispatch({ type: "ADD_ITEM" })
        }
      >
        Add Item
      </button>

      <button
        onClick={() =>
          dispatch({ type: "REMOVE_ITEM" })
        }
      >
        Remove Item
      </button>

      <button
        onClick={() =>
          dispatch({ type: "CLEAR_CART" })
        }
      >
        Clear Cart
      </button>

    </>

  );

}

export default ShoppingCart;