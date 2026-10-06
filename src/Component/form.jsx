import { useState } from "react"

function SignUpForm(){
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");

   function handleSubmit(e){
      e.preventDefault();
      console.log({name, email});
   }
   return(
      <div className="m-20">
        <form onSubmit={handleSubmit} className="">
          <input value={name} placeholder="Enter Name" onChange={(e) => setName(e.target.value)}/>
          <input value={email} placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)}/>
          <button type="submit">Submit</button>
        </form>
      </div>
   )
}
export default SignUpForm;

// function Form(){
//   const [name, setName] = useState("");
//   return(
//     <div className="bg-red-100 flex w-screen flex-col items-center justify-center mt-4">
//         <input value={name} placeholder="Enter Name" onChange={(event) => setName(event.target.value)}/>
//       <p>Your name is: {name}</p>

//     </div>
//   )
// }
// export default Form;