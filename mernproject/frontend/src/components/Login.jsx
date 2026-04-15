import { useState, useContext } from "react";
import { loginUser } from "../api/authApi";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const [form, setForm] = useState({});
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await loginUser(form);

    login(res.data.token);

    navigate("/dashboard");
  };

  return (
    <form onSubmit={handleSubmit} className="p-10">
      <input
        placeholder="Email"
        onChange={(e)=>setForm({...form,email:e.target.value})}
        className="border p-2"
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e)=>setForm({...form,password:e.target.value})}
        className="border p-2"
      />

      <button className="bg-blue-500 text-white p-2">
        Login
      </button>
    </form>
  );
localStorage.setItem("token", res.data.token);
window.location.href = "/dashboard";
};