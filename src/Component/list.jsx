import { useLayoutEffect } from "react";

const cities = [
  {id:1, city: "Lagos", abr: "Lg"},
  {id:2, city:"Abuja", abr: "Abj"},
  {id:3, city:"Oyo", abr: "Oy"},
  {id:4, city: "uyo", abr: "Uy"}
]
function CitiesCard({town, abr, color}){
  return(
      <div style={{backgroundColor: color}}>
          <h2>{town}</h2>
          <p>{abr}</p>
          
      </div>
  );
}

function Cities(){
  return (
    <div className="flex flex-row w-full text-white bg-blue-200 items-center justify-center min-h-64">
        {
          cities.map((city) => (
            <div key ={city.id}>
             <CitiesCard
                key ={`${city.id}-red`}
                color={"red"}
                town ={city.city}
                abr ={city.abr}
             />
             
            <CitiesCard
                key = {`${city.id}-green`}
                color={"lightGreen"}
                town ={city.city}
                abr = {city.abr}
             />
             </div>
            // Key is a unique identifiyer for a what rendering a list in react
           // <p key = {city.id}>{city.city}</p>
          
          ))
        }
    </div>
  );
}


export default Cities