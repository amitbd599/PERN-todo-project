import { useEffect, useState } from "react";
import {
  FaPenToSquare,
  FaRegCircleXmark,
  FaRegEye,
  FaRegTrashCan,
} from "react-icons/fa6";
import Modal from "react-modal";
import { deleteSingleTodo, getSingleTodo, getTodo } from "../api/api";
import { DeleteAlert, SuccessToast } from "../helper/helper";
import { Link } from "react-router-dom";
import Loader from "./Loader";
const AllToDo = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [singleData, setSingleData] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      let res = await getTodo();
      setData(res.data);
      setLoading(false);
    })();
  }, []);

  let openModal = () => {
    setIsOpen(true);
  };

  let closeModal = () => {
    setIsOpen(false);
  };

  let deleteTodo = async (id) => {
    let deleteAlert = await DeleteAlert();
    if (deleteAlert) {
      setLoading(true);
      await deleteSingleTodo(id);
      SuccessToast("Todo delete successfully!");
      let res = await getTodo();
      setData(res.data);
      setLoading(false);
    }
  };

  let showSingleTodo = async (id) => {
    setLoading(true);
    let res = await getSingleTodo(id);
    setSingleData(res?.data);
    setLoading(false);
  };

  return (
    <>
      <div>{loading && <Loader />}</div>
      <section className='mt-[80px]'>
        <div className='container mx-auto'>
          <div className='overflow-hidden rounded-lg border border-gray-200 shadow-md m-5'>
            <table className='w-full border-collapse bg-white text-left text-sm text-gray-500'>
              <thead className='bg-gray-50'>
                <tr>
                  <th
                    scope='col'
                    className='px-6 py-4 font-medium text-gray-900'
                  >
                    ID
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-4 font-medium text-gray-900'
                  >
                    Name
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-4 font-medium text-gray-900'
                  >
                    State
                  </th>

                  <th
                    scope='col'
                    className='px-6 py-4 flex justify-end font-medium text-gray-900'
                  >
                    Team
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-4 font-medium text-gray-900'
                  />
                </tr>
              </thead>
              <tbody className='divide-y divide-gray-100 border-t border-gray-100'>
                {data?.map((item, index) => (
                  <tr key={index} className='hover:bg-gray-50'>
                    <td className='px-6 py-4 text-[16px]'>{item?.id}</td>
                    <td className='px-6 py-4  text-[16px]'>{item?.title}</td>
                    <td className='px-6 py-4'>
                      <span
                        className={`inline-flex items-center gap-1 rounded-full  px-4 py-1 text-[14px] font-semibold
                    ${
                      item?.status === "New"
                        ? "text-blue-600 bg-blue-100"
                        : item?.status === "Complete"
                        ? "text-green-600 bg-green-100"
                        : item?.status === "Cancel"
                        ? "text-red-600 bg-red-100"
                        : ""
                    } `}
                      >
                        {item?.status}
                      </span>
                    </td>
                    <td className='px-6 py-4'>
                      <div className='flex justify-end gap-4'>
                        <button
                          onClick={() => {
                            showSingleTodo(item?.id);
                            openModal();
                          }}
                        >
                          <FaRegEye className='text-[30px] p-[4px] cursor-pointer' />
                        </button>
                        <Link to={`/update-todo/${item?.id}`}>
                          <FaPenToSquare className='text-[30px] p-[4px] cursor-pointer' />
                        </Link>
                        <button onClick={() => deleteTodo(item?.id)}>
                          <FaRegTrashCan className='text-[30px] p-[4px] cursor-pointer' />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel='Example Modal'
            className='bg-white shadow-lg p-[20px] rounded-[10px] relative w-[600px] top-[50%] left-[50%]  translate-x-[-50%] translate-y-[-50%]'
          >
            <button
              onClick={closeModal}
              className='absolute right-[20px] p-2 cursor-pointer'
            >
              <FaRegCircleXmark className='text-[30px] text-red-500' />
            </button>
            <div>
              <div className='p-4 py-8'>
                <div className='heading text-center font-bold text-2xl m-5 text-gray-800 bg-white'>
                  View ToDos
                </div>
                <div className=' mx-auto  grid gap-[16px] text-gray-800 p-4'>
                  <div>
                    <p className='text-[16px] '>
                      <span className='font-bold'>ID:</span> {singleData?.id}
                    </p>
                  </div>
                  <div>
                    <span className='font-bold'>Title:</span>
                    <p className='text-[16px] '>{singleData?.title}</p>
                  </div>

                  <div>
                    <span className='font-bold'>Description:</span>
                    <p className='text-[16px] '>{singleData?.description}</p>
                  </div>

                  <div className='flex gap-[10px] items-center'>
                    <span className='font-bold'>Status:</span>
                    <span
                      className={`text-[14px] inline-flex items-center gap-1 rounded-full  px-[10px] py-[5px] leading-[100%] font-semibold ${
                        singleData?.status === "New"
                          ? "text-blue-600 bg-blue-100"
                          : singleData?.status === "Complete"
                          ? "text-green-600 bg-green-100"
                          : singleData?.status === "Cancel"
                          ? "text-red-600 bg-red-100"
                          : ""
                      }`}
                    >
                      {singleData?.status}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
        </div>
      </section>
    </>
  );
};

export default AllToDo;
