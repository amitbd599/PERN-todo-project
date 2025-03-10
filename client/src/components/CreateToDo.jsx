import React, { useRef, useState } from "react";
import { createTodo } from "../api/api";
import { ErrorToast, SuccessToast } from "../helper/helper";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";

const CreateToDo = () => {
  const [loading, setLoading] = useState(false);
  let { titleRef, desRef, statusRef } = useRef();
  let navigate = useNavigate();
  let submitFun = async () => {
    const title = titleRef.value;
    const description = desRef.value;
    const status = statusRef.value;
    if (!title || !description || !status) {
      ErrorToast("Please fill all fields");
      return;
    }
    console.log({ title, description, status });
    setLoading(true);
    let res = await createTodo({ title, description, status });
    if (res) {
      SuccessToast("Todo created successfully!");
      setLoading(false);
      navigate("/all-todo");
    }
  };
  return (
    <div>
      <div>{loading && <Loader />}</div>
      <div className='  p-4 py-8'>
        <div className='heading text-center font-bold text-2xl m-5 text-gray-800 bg-white'>
          Create ToDo
        </div>
        <div className=' mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl'>
          <label htmlFor='title'>Title:</label>
          <input
            ref={(input) => (titleRef = input)}
            className=' bg-gray-100 border border-gray-300 p-2 mb-4 outline-none'
            type='text'
            id='title'
            placeholder='Enter title...'
          />

          <label htmlFor='description'>Description:</label>
          <textarea
            ref={(input) => (desRef = input)}
            className=' bg-gray-100 p-3 h-40 border border-gray-300 outline-none'
            defaultValue={""}
            id='description'
            placeholder='Enter description...'
          />

          <label className='mt-2'>Status:</label>
          <select
            ref={(input) => (statusRef = input)}
            defaultValue={"New"}
            className='bg-gray-100 border border-gray-300 p-2 mb-4 outline-none '
          >
            <option value={"New"}>New</option>
            <option value={"Cancel"}>Cancel</option>
            <option value={"Complete"}>Complete</option>
          </select>

          {/* Buttons */}
          <button
            onClick={submitFun}
            className='p-2 font-semibold cursor-pointer text-white  bg-indigo-500'
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateToDo;
