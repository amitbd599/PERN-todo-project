const express = require("express");
const cors = require("cors");

const pool = require("./db");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Router

app.post("/create-todo", async (req, res) => {
  try {
    const { description } = req.body;

    const newTodo = await pool.query(
      "INSERT INTO todo (description) VALUES($1)",
      [description]
    );

    res.json(newTodo);

    console.log(description);
  } catch (error) {
    console.log(error.message);
  }
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
