const initialQuantityState = {
  quantity: 5
};

function quantityReducer(state, action) {

  switch (action.type) {

    case "quantity/increase":
      return {
        quantity: state.quantity + 1
      };

    case "quantity/decrease":
      return {
        quantity: state.quantity - 1
      };

    default:
      return state;
  }
}

const increasedQuantity = quantityReducer(
  initialQuantityState,
  { type: "quantity/increase" }
);

console.log(increasedQuantity);