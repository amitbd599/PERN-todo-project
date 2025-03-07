const express = require("express");
const cors = require("cors");

const pool = require("./db");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Router

// create-todo
app.post("/create-todo", async (req, res) => {
  try {
    const { description } = req.body;

    const newTodo = await pool.query(
      "INSERT INTO todo (description) VALUES($1) RETURNING *",
      [description]
    );

    res.json(newTodo.rows[0]);

    console.log(description);
  } catch (error) {
    console.log(error.message);
  }
});

// get-todo
app.get("/get-todo", async (req, res) => {
  try {
    let allTodos = await pool.query("SELECT * FROM todo");
    res.json(allTodos.rows);
  } catch (error) {
    log.error(error.message);
  }
});

// get-single-todo
app.get("/get-single-todo/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let todo = await pool.query("SELECT * FROM todo WHERE todo_id=$1", [id]);
    res.json(todo.rows[0]);
  } catch (error) {
    console.log(error.message);
  }
});

// update-todo
app.put("/update-todo/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    let updateTodo = await pool.query(
      "UPDATE todo SET description=$1 WHERE todo_id=$2",
      [description, id]
    );
    res.json(`Todo with id ${id} updated successfully.`);
  } catch (error) {
    console.log(error.message);
  }
});

// delete-single-todo
app.delete("/delete-single-todo/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let deleteTodos = await pool.query("DELETE FROM todo WHERE todo_id=$1", [
      id,
    ]);
    res.json(`Todo with id ${id} deleted successfully.`);
  } catch (error) {
    console.log(error.message);
  }
});

// delete-all
app.delete("/delete-all", async (req, res) => {
  try {
    let deleteTodos = await pool.query("DELETE FROM todo");
    res.json("All todos deleted successfully.");
  } catch (error) {
    console.log(error.message);
  }
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
