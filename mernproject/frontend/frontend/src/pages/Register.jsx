import { useState } from "react";
import { registerUser } from "../api/authApi";

export default function Register() {

  const [form,setForm]=useState({});

  const submit = async(e)=>{
    e.preventDefault();
    await registerUser(form);
    alert("Registered Successfully");
  };

  return(
    <form onSubmit={submit} className="p-10">

      <input placeholder="Name"
      onChange={(e)=>setForm({...form,name:e.target.value})}
      className="border p-2"/>

      <input placeholder="Email"
      onChange={(e)=>setForm({...form,email:e.target.value})}
      className="border p-2"/>

      <input type="password" placeholder="Password"
      onChange={(e)=>setForm({...form,password:e.target.value})}
      className="border p-2"/>

      <button className="bg-green-500 text-white p-2">
        Register
      </button>

    </form>
  );
}