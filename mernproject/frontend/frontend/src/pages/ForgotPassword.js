import { useState } from "react";
import axios from "axios";

function ForgotPassword(){

 const [email,setEmail]=useState("");

 const sendLink = async()=>{
   await axios.post(
     "http://localhost:5000/api/auth/forgot-password",
     {email}
   );
   alert("Reset link sent");
 }

 return(
   <div style={{textAlign:"center"}}>
     <h2>Forgot Password</h2>

     <input
       placeholder="Email"
       onChange={e=>setEmail(e.target.value)}
     />

     <br/><br/>
     <button onClick={sendLink}>Send Link</button>
   </div>
 );
}

export default ForgotPassword;