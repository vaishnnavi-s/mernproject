const db = require("../config/db");

// GET ALL ITEMS
exports.getItems = async (req, res, next) => {
  try {
    const [items] = await db.query(
      "SELECT * FROM items WHERE user_id=?",
      [req.user.id]
    );

    res.json({
      success: true,
      data: items,
    });
  } catch (err) {
    next(err);
  }
};

// CREATE ITEM
exports.createItem = async (req, res, next) => {
  try {
    const { name } = req.body;

    if (!name) {
      throw { status: 400, message: "Item name required" };
    }

    await db.query(
      "INSERT INTO items (name, user_id) VALUES (?, ?)",
      [name, req.user.id]
    );

    res.status(201).json({
      success: true,
      message: "Item created",
    });
  } catch (err) {
    next(err);
  }
};

// UPDATE ITEM
exports.updateItem = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    await db.query(
      "UPDATE items SET name=? WHERE id=? AND user_id=?",
      [name, id, req.user.id]
    );

    res.json({
      success: true,
      message: "Item updated",
    });
  } catch (err) {
    next(err);
  }
};

// DELETE ITEM
exports.deleteItem = async (req, res, next) => {
  try {
    const { id } = req.params;

    await db.query(
      "DELETE FROM items WHERE id=? AND user_id=?",
      [id, req.user.id]
    );

    res.json({
      success: true,
      message: "Item deleted",
    });
  } catch (err) {
    next(err);
  }
};