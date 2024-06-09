import { GrSearch } from "react-icons/gr";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import SummaryApi from "../../common";
import toast from "react-hot-toast";
import { setUserDetails } from "../../Store/userSlice";
import ROLE from "../../common/role";
import { useContext, useState } from "react";
import Context from "../../Context/Context";
const Header = () => {
  const user = useSelector((state) => state.user?.user);
  const dispatch = useDispatch();
  console.log(user);
  const context = useContext(Context);
  const navigate = useNavigate();
  const searchInput = useLocation();
  // const URLSearch = new URLSearchParams(searchInput?.search);
  // const searchQuery = URLSearch.getAll("i", "q");
  // const [search, setSearch] = useState(searchQuery);

  const [search, setSearch] = useState(searchInput?.search?.split("=")[1]);
  /***Logout functionality***/
  const handleLogout = async () => {
    const fetchData = await fetch(SummaryApi.user_logout.url, {
      method: SummaryApi.user_logout.method,
      credentials: "include",
    });
    const data = await fetchData.json();
    if (data.success) {
      dispatch(setUserDetails(null));
      toast.success(data.message);
    }
    if (data.error) {
      toast.error(data.message);
    }
  };

  /***Search functionality***/
  const handleSearch = (e) => {
    const { value } = e.target;
    setSearch(value);
    if (value) {
      navigate(`/search?q=${value}`);
    } else {
      navigate(`/search`);
    }
  };
  return (
    <div className="h-20 shadow-xl bg-slate-100 w-full fixed z-40 font-ubuntu">
      <div className="h-full container mx-auto flex items-center px-4 justify-between">
        <div className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] flex items-center">
          <Link to={"/"}>
            <img src="https://i.ibb.co/z4XZBPB/e-click-logo.png" alt="" />
          </Link>
        </div>

        <div className="hidden lg:flex items-center w-full justify-between max-w-sm border border-gray-400 rounded-full focus-within:shadow pl-2">
          <input
            type="text"
            placeholder="Search product..."
            className="w-full px-3 outline-none bg-transparent"
            onChange={handleSearch}
            value={search}
          />
          <div className="text-lg min-w-[50px] h-8 bg-slate-900 flex items-center justify-center rounded-r-full text-white">
            <GrSearch />
          </div>
        </div>

        <div className="flex items-center gap-5 md:gap-10">
          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="">
              <div className="text-3xl cursor-pointer relative flex justify-center">
                {user?.profilePic ? (
                  <img
                    className="w-10 h-10 rounded-full"
                    src={user?.profilePic}
                    alt={user?.name}
                  />
                ) : (
                  <FaRegCircleUser />
                )}
              </div>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                {user?.role === ROLE.ADMIN && (
                  <Link
                    className="hidden md:block"
                    to={"/Admin-dashboard/all-users"}
                  >
                    Admin Dashboard
                  </Link>
                )}
              </li>
            </ul>
          </div>

          <div>
            <Link to={"/cart"} className="text-2xl relative text-slate-900">
              <span>
                <FaShoppingCart />
              </span>

              {user && (
                <div className="bg-red-600 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3">
                  <p className="text-sm">{context?.cartProductCount}</p>
                </div>
              )}
            </Link>
          </div>

          <div>
            {user ? (
              <Link
                to={"/"}
                className="px-5 py-3 rounded-xl text-white bg-slate-900 hover:bg-red-700"
                onClick={handleLogout}
              >
                Logout
              </Link>
            ) : (
              <Link
                to={"/login"}
                className="px-5 py-3 rounded-xl text-white bg-slate-900 hover:bg-red-700"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
      <hr className="h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-slate-900 to-transparent opacity-70 dark:opacity-100" />
    </div>
  );
};

export default Header;
