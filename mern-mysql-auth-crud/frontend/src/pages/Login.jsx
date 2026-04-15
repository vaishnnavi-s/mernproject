import {useState} from "react";
import {useNavigate,Link} from "react-router-dom";
import API from "../api/axios";

function Login(){

 const [email,setEmail]=useState("");
 const [password,setPassword]=useState("");
 const navigate=useNavigate();

 const submit=async(e)=>{
  e.preventDefault();

  const res=await API.post("/auth/login",{email,password});
  localStorage.setItem("token",res.data.token);

  navigate("/dashboard");
 };

 return(
  <div className="container">
   <h2>Login</h2>
   <form onSubmit={submit}>
    <input placeholder="Email" onChange={e=>setEmail(e.target.value)} />
    <input type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)} />
    <button>Login</button>
   </form>

   <Link to="/register">Register</Link><br/>
   <Link to="/forgot-password">Forgot Password?</Link>
  </div>
 );
}

export default Login;