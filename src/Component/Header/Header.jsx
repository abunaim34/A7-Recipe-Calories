import { IoSearchSharp  } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";


const Header = () => {
    return (
      <div className="navbar bg-base-100">
        <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Home</a></li>
            <li><a>Recipes</a></li>
            <li><a>About</a></li>
            <li><a>Search</a></li>
          </ul>
        </div>
          <a className="btn btn-ghost text-2xl lg:text-3xl font-bold">Recipe Calories</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-[#150B2BB3]">
            <li><a>Home</a></li>
            <li><a>Recipes</a></li>
            <li><a>About</a></li>
            <li><a>Search</a></li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex items-center gap-2">
            <div className="form-control relative hidden lg:block">
              <IoSearchSharp  className='absolute text-xl ml-3 top-4' />
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