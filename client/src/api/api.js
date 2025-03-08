import axios from "axios";
let baseUrl = "http://localhost:5000";

// createTodo
export const createTodo = async (reqBody) => {
  try {
    await axios.post(baseUrl + "/create-todo", reqBody);
    return true;
  } catch (error) {
    console.log(error);
  }
};

// getTodo
export const getSingleTodo = async (id) => {
  try {
    let res = await axios.get(baseUrl + "/get-single-todo/" + id);
    return res;
  } catch (error) {
    console.log(error);
  }
};

// getTodo
export const getTodo = async () => {
  try {
    let res = await axios.get(baseUrl + "/get-todo");
    return res;
  } catch (error) {
    console.log(error);
  }
};

// delete-single-todo
export const deleteSingleTodo = async (id) => {
  try {
    let res = await axios.delete(baseUrl + "/delete-single-todo/" + id);
    return res;
  } catch (error) {
    console.log(error);
  }
};

// updateTodo
export const updateTodo = async (id, reqBody) => {
  try {
    await axios.put(baseUrl + "/update-todo/" + id, reqBody);
    return true;
  } catch (error) {
    console.log(error);
  }
};
