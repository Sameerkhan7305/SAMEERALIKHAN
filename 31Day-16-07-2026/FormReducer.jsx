import { useReducer } from "react";

const initialState = {

  name: "",

  email: ""

};

function formReducer(state, action) {

  if (action.type === "UPDATE_NAME") {

    return {

      ...state,

      name: action.value

    };

  }

  if (action.type === "UPDATE_EMAIL") {

    return {

      ...state,

      email: action.value

    };

  }

  return state;

}

function FormReducer() {

  const [form, dispatch] = useReducer(

    formReducer,

    initialState

  );

  return (

    <>

      <input

        placeholder="Name"

        value={form.name}

        onChange={(event) =>
          dispatch({
            type: "UPDATE_NAME",
            value: event.target.value
          })
        }

      />

      <br /><br />

      <input

        placeholder="Email"

        value={form.email}

        onChange={(event) =>
          dispatch({
            type: "UPDATE_EMAIL",
            value: event.target.value
          })
        }

      />

      <h2>{form.name}</h2>

      <h2>{form.email}</h2>

    </>

  );

}

export default FormReducer;