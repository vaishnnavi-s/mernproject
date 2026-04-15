import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {

  const navigate = useNavigate();

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const handleLogin = async (e) => {

    e.preventDefault();   // ⭐ VERY IMPORTANT

    console.log("Login clicked"); // DEBUG

    try {

      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password }
      );

      localStorage.setItem("token", res.data.token);

      alert("Login Successful ✅");

      navigate("/dashboard");

    } catch (err) {
      console.log(err);
      alert("Login Failed ❌");
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>CampusPe Login</h2>

      {/* ⭐ FORM HANDLES SUBMIT */}
      <form onSubmit={handleLogin}>

        <input
          type="email"
          placeholder="Email"
          required
          onChange={(e)=>setEmail(e.target.value)}
        />

        <br/><br/>

        <input
          type="password"
          placeholder="Password"
          required
          onChange={(e)=>setPassword(e.target.value)}
        />

        <br/><br/>

        {/* ⭐ BUTTON TYPE MUST BE SUBMIT */}
        <button type="submit">Login</button>

      </form>
    </div>
  );
}

export default Login;