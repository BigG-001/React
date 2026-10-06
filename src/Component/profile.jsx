import { useState } from "react"

// const [name, setName] = useState("");
// const [age, setAge] = useState(0);
// const [isLoggedIn, setIsLoggedIn] = useState(false);

function Profile(){
  const [name, setName] = useState("");
  const [isOnline, setOnline] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return(
    <div>
        <input type="text" value={name} placeholder="Enter Name"  onChange={(e) => setName(e.target.value)}/>
        <p>Hello {name}</p>
        <button onClick={() => setOnline(!isOnline)}>
          {isOnline ? "Online" : "Offline"}
        </button>

        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
          {isLoggedIn ? "Login" : "Logout"}
        </button>
          <div>
             {isLoggedIn ? (
              <div>Welcome {name}</div>
             ) : (
              <p>Please sign In</p>
             )}
          </div>
    </div>
  )
}
export default Profile;