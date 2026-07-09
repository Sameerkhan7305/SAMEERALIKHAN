import { createContext, useContext } from "react";

const CityContext = createContext("Unknown City");

function CityCard() {

  const cityName = useContext(CityContext);

  return <h2>City: {cityName}</h2>;
}

function CreateContextDemo() {

  return (
    <CityContext.Provider value="Bangalore">  <CityCard />   </CityContext.Provider>
  );
}

export default CreateContextDemo;