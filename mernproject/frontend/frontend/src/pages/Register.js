import { useState } from "react";
import axios from "axios";

function Register(){

 const [name,setName]=useState("");
 const [email,setEmail]=useState("");
 const [password,setPassword]=useState("");

 const register = async()=>{
   await axios.post("http://localhost:5000/api/auth/register",
   {name,email,password});

   alert("Registered Successfully");
 }

 return(
  <div style={{textAlign:"center",marginTop:"100px"}}>
   <h2>CampusPe Register</h2>

   <input placeholder="Name"
     onChange={e=>setName(e.target.value)}/><br/><br/>

   <input placeholder="Email"
     onChange={e=>setEmail(e.target.value)}/><br/><br/>

   <input type="password"
     placeholder="Password"
     onChange={e=>setPassword(e.target.value)}/><br/><br/>

   <button onClick={register}>Register</button>
  </div>
 );
}

export default Register;