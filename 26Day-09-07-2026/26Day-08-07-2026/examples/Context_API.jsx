import { createContext,useContext } from "react";

const Usercontext = createContext();

function Child(){


    const userName = useContext(Usercontext);
    return(
        <h2>Hello, This is {userName}</h2>
    )
}

function Example18_ContextAPI() {

    return( <Usercontext.Provider value="Sameer">  <Child/>  </Usercontext.Provider>


    )
}

export default Example18_ContextAPI;