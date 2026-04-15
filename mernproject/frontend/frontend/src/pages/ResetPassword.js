import {useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

function ResetPassword(){

 const {token}=useParams();
 const [password,setPassword]=useState("");

 const reset=async()=>{
   await axios.post(
     `http://localhost:5000/api/auth/reset-password/${token}`,
     {password}
   );

   alert("Password Updated");
 }

 return(
  <div style={{textAlign:"center"}}>
   <h2>Reset Password</h2>

   <input
     type="password"
     placeholder="New Password"
     onChange={e=>setPassword(e.target.value)}
   />

   <br/><br/>
   <button onClick={reset}>Reset</button>
  </div>
 );
}

export default ResetPassword;