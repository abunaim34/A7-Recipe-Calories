import { IoSearchSharp  } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";


const Header = () => {
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <a className="btn btn-ghost text-3xl font-bold">Recipe Calories</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-[#150B2BB3]">
            <li><a>Home</a></li>
            <li><a>Recipes</a></li>
            <li><a>Recipes</a></li>
            <li><a>Recipes</a></li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex items-center gap-2">
            <div className="form-control relative flex items-start justify-center">
              <IoSearchSharp  className='absolute text-xl ml-3' />
              <input type="text" placeholder="Search"  className="input input-bordered w-24 md:w-auto pl-10" />
            </div>
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="">
                  <div className=" rounded-full ">
                  <CgProfile className='text-3xl bg-[#0BE58A] rounded-full '/>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Header;