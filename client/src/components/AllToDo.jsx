import { useEffect, useState } from "react";
import {
  FaPenToSquare,
  FaRegCircleXmark,
  FaRegTrashCan,
} from "react-icons/fa6";
import Modal from "react-modal";
import { getTodo } from "../api/api";
const AllToDo = () => {
  const [data, setData] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    (async () => {
      let res = await getTodo();
      setData(res.data);
    })();
  }, []);

  console.log(data);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <section className='mt-[80px]'>
      <div className='container mx-auto'>
        <div className='overflow-hidden rounded-lg border border-gray-200 shadow-md m-5'>
          <table className='w-full border-collapse bg-white text-left text-sm text-gray-500'>
            <thead className='bg-gray-50'>
              <tr>
                <th scope='col' className='px-6 py-4 font-medium text-gray-900'>
                  ID
                </th>
                <th scope='col' className='px-6 py-4 font-medium text-gray-900'>
                  Name
                </th>
                <th scope='col' className='px-6 py-4 font-medium text-gray-900'>
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
              <tr className='hover:bg-gray-50'>
                <td className='px-6 py-4'>01</td>
                <td className='px-6 py-4'>Product Designer</td>
                <td className='px-6 py-4'>
                  <span className='inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600'>
                    Design
                  </span>
                </td>
                <td className='px-6 py-4'>
                  <div className='flex justify-end gap-4'>
                    <button>
                      <FaRegTrashCan className='text-[30px] p-[4px] cursor-pointer' />
                    </button>
                    <button onClick={openModal}>
                      <FaPenToSquare className='text-[30px] p-[4px] cursor-pointer' />
                    </button>
                  </div>
                </td>
              </tr>
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
            <div className='  p-4 py-8'>
              <div className='heading text-center font-bold text-2xl m-5 text-gray-800 bg-white'>
                Edit ToDos
              </div>
              <div className=' mx-auto  flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl'>
                <label htmlFor='title'>Title:</label>
                <input
                  className=' bg-gray-100 border border-gray-300 p-2 mb-4 outline-none'
                  type='text'
                  id='title'
                  placeholder='Enter title...'
                />

                <label htmlFor='description'>Description:</label>
                <textarea
                  className=' bg-gray-100 p-3 h-40 border border-gray-300 outline-none'
                  defaultValue={""}
                  id='description'
                  placeholder='Enter description...'
                />

                <label className='mt-2'>Status:</label>
                <select className='bg-gray-100 border border-gray-300 p-2 mb-4 outline-none '>
                  <option>New</option>
                  <option>Cancel</option>
                  <option>Complete</option>
                </select>

                {/* Buttons */}
                <button className='p-2 font-semibold cursor-pointer text-white  bg-indigo-500'>
                  Update
                </button>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </section>
  );
};

export default AllToDo;
