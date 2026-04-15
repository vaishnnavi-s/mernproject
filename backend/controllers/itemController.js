import db from "../config/db.js";

export const getItems = async(req,res)=>{
 const [items] = await db.query(
  "SELECT * FROM items WHERE user_id=?",
  [req.user.id]
 );
 res.json(items);
};

export const createItem = async(req,res)=>{
 const {title,description} = req.body;

 await db.query(
  "INSERT INTO items(title,description,user_id) VALUES(?,?,?)",
  [title,description,req.user.id]
 );

 res.json({message:"Item Added"});
};

export const deleteItem = async(req,res)=>{
 await db.query(
  "DELETE FROM items WHERE id=?",
  [req.params.id]
 );

 res.json({message:"Deleted"});
};