import express from "express";
import protect from "../middleware/authMiddleware.js";
import {getItems,createItem,deleteItem}
from "../controllers/itemController.js";

const router = express.Router();

router.get("/",protect,getItems);
router.post("/",protect,createItem);
router.delete("/:id",protect,deleteItem);

export default router;