import { Link, NavLink } from "react-router-dom";

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
                  <NavLink
                    to='/'
                    className={(navData) =>
                      `text-[18px] font-medium p-[10px] ${
                        navData.isActive && "text-[#4E42F6]"
                      }`
                    }
                  >
                    Create ToDo
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={(navData) =>
                      `text-[18px] font-medium p-[10px] ${
                        navData.isActive && "text-[#4E42F6]"
                      }`
                    }
                    to='/all-todo'
                  >
                    All ToDo
                  </NavLink>
                </li>
                <li>
                  <Link
                    target='_blank'
                    to='https://github.com/amitbd599/PERN-todo-project'
                    className='text-[18px] font-medium p-[10px]'
                  >
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
