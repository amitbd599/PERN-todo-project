import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <section className='h-[80px] shadow flex items-center'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-12 gap-[30px]'>
          <div className='col-span-6'>
            {" "}
            <div className='logo'>
              <Link to='/'>
                <img className='w-[200px]' src='/img/TODO.PERN.png' alt='' />
              </Link>
            </div>
          </div>
          <div className='col-span-6'>
            <nav>
              <ul className='flex items-center justify-end gap-[20px]'>
                <li>
                  <Link to='/' className='text-[18px] font-medium p-[10px]'>
                    Create ToDo
                  </Link>
                </li>
                <li>
                  <Link
                    to='/all-todo'
                    className='text-[18px] font-medium p-[10px]'
                  >
                    All ToDo
                  </Link>
                </li>
                <li>
                  <Link to='#' className='text-[18px] font-medium p-[10px]'>
                    Git Link
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavBar;
