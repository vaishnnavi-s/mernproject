import db from "../config/db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async(req,res)=>{
 const {name,email,password} = req.body;

 const hashed = await bcrypt.hash(password,10);

 await db.query(
  "INSERT INTO users(name,email,password) VALUES(?,?,?)",
  [name,email,hashed]
 );

 res.json({message:"User Registered"});
};

export const login = async(req,res)=>{
 const {email,password} = req.body;

 const [users] = await db.query(
  "SELECT * FROM users WHERE email=?",
  [email]
 );

 if(users.length===0)
  return res.status(400).json({message:"User not found"});

 const user = users[0];

 const match = await bcrypt.compare(password,user.password);

 if(!match)
  return res.status(400).json({message:"Wrong password"});

 const token = jwt.sign(
   {id:user.id},
   process.env.JWT_SECRET,
   {expiresIn:"7d"}
 );

 res.json({token,user});
};