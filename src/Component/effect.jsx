import { useState, useEffect } from "react";


function SideEffect(){
  const [count, setCount] = useState(0);
  const increment = () => setCount(prevCount => prevCount + 1);
  const decrement = () => setCount(prevCount => prevCount - 1);
  useEffect( 
    () => {
      console.log("component updated successfully");
    }, [count]
  )
 
  return(
    <div className="flex justify-center items-center h-24 bg-gray-200">
      <button onClick={increment} className="text-black py-2 px-4 border-2 border-blue-500 rounded">
        Increment</button>
        <button onClick={decrement} className="text-black py-2 px-4 border-2 border-red-500 rounded">
        decrement</button>
    </div>
  )
}
export default SideEffect;