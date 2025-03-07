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
export const getTodo = async () => {
  try {
    let res = await axios.get(baseUrl + "/get-todo");
    return res;
  } catch (error) {
    console.log(error);
  }
};
