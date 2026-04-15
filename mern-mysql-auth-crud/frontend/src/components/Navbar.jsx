import {useNavigate} from "react-router-dom";

function Navbar(){

 const navigate=useNavigate();

 const logout=()=>{
  localStorage.removeItem("token");
  navigate("/");
 };

 return(
  <div style={{background:"#007bff",padding:"15px",color:"white"}}>
   Dashboard
   <button onClick={logout} style={{float:"right"}}>Logout</button>
  </div>
 );
}

export default Navbar;