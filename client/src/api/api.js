import axios from "axios";

// createTodo
export const createTodo = async (reqBody) => {
  try {
    await axios.post("/api/create-todo", reqBody);
    return true;
  } catch (error) {
    console.log(error);
  }
};

// getTodo
export const getSingleTodo = async (id) => {
  try {
    let res = await axios.get("/api/get-single-todo/" + id);
    return res;
  } catch (error) {
    console.log(error);
  }
};

// getTodo
export const getTodo = async () => {
  try {
    let res = await axios.get("/api/get-todo");
    return res;
  } catch (error) {
    console.log(error);
  }
};

// delete-single-todo
export const deleteSingleTodo = async (id) => {
  try {
    let res = await axios.delete("/api/delete-single-todo/" + id);
    return res;
  } catch (error) {
    console.log(error);
  }
};

// updateTodo
export const updateTodo = async (id, reqBody) => {
  try {
    await axios.put("/api/update-todo/" + id, reqBody);
    return true;
  } catch (error) {
    console.log(error);
  }
};
