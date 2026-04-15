import React, { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {

  const API = "http://localhost:5000/api/items";

  const [items, setItems] = useState([]);
  const [stats, setStats] = useState({
    total: 0,
    completed: 0,
    pending: 0,
  });

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // ================= FETCH DATA =================
  const fetchData = async () => {
    try {
      const itemsRes = await axios.get(API);
      const statsRes = await axios.get(`${API}/stats`);

      setItems(itemsRes.data);
      setStats(statsRes.data);

    } catch (err) {
      console.log("API Error:", err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // ================= ADD ITEM =================
  const addItem = async (e) => {
    e.preventDefault();

    if (!title) return;

    try {
      await axios.post(API, {
        title,
        description,
      });

      setTitle("");
      setDescription("");

      fetchData();
    } catch {
      alert("Failed to add item");
    }
  };

  // ================= DELETE ITEM =================
  const deleteItem = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);
      fetchData();
    } catch {
      alert("Delete failed");
    }
  };

  // ================= UPDATE STATUS =================
  const updateStatus = async (id, status) => {
    try {
      await axios.put(`${API}/${id}`, { status });
      fetchData();
    } catch {
      alert("Update failed");
    }
  };

  // ================= LOGOUT =================
  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* NAVBAR */}
      <nav className="bg-blue-600 text-white flex justify-between items-center p-4 shadow">
        <h1 className="text-xl font-bold">CampusPe Dashboard 🎓</h1>

        <button
          onClick={logout}
          className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </nav>

      <div className="p-6">

        {/* STATS CARDS */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">

          <div className="bg-white shadow rounded p-4 text-center">
            <h2 className="font-semibold">Total Items</h2>
            <p className="text-2xl">{stats.total}</p>
          </div>

          <div className="bg-white shadow rounded p-4 text-center">
            <h2 className="font-semibold text-green-600">Completed</h2>
            <p className="text-2xl">{stats.completed}</p>
          </div>

          <div className="bg-white shadow rounded p-4 text-center">
            <h2 className="font-semibold text-yellow-600">Pending</h2>
            <p className="text-2xl">{stats.pending}</p>
          </div>

        </div>

        {/* ADD ITEM FORM */}
        <div className="bg-white shadow rounded p-6 mb-8">

          <h2 className="font-bold mb-4">Add New Item</h2>

          <form onSubmit={addItem} className="space-y-3">

            <input
              className="border w-full p-2 rounded"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <input
              className="border w-full p-2 rounded"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <button className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700">
              Add Item
            </button>

          </form>

        </div>

        {/* ITEMS TABLE */}
        <div className="bg-white shadow rounded p-6">

          <h2 className="font-bold mb-4">Items List</h2>

          {items.length === 0 ? (
            <p className="text-center text-gray-500">
              No items added yet
            </p>
          ) : (

            <table className="w-full border text-center">

              <thead className="bg-gray-200">
                <tr>
                  <th className="p-2">Title</th>
                  <th>Description</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>

                {items.map((item) => (
                  <tr key={item._id} className="border">

                    <td>{item.title}</td>
                    <td>{item.description}</td>

                    <td>
                      <select
                        value={item.status}
                        onChange={(e) =>
                          updateStatus(item._id, e.target.value)
                        }
                        className="border p-1"
                      >
                        <option value="Pending">Pending</option>
                        <option value="Completed">Completed</option>
                      </select>
                    </td>

                    <td>
                      <button
                        onClick={() => deleteItem(item._id)}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </td>

                  </tr>
                ))}

              </tbody>

            </table>
          )}

        </div>

      </div>
    </div>
  );
}

export default Dashboard;