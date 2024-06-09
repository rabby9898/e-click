import { FaBorderAll, FaRegCircleUser, FaUsers } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { IoBagAddOutline } from "react-icons/io5";
import { useEffect } from "react";
import ROLE from "../common/role";
const AdminDashboard = () => {
  const user = useSelector((state) => state.user?.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.role !== ROLE.ADMIN) {
      navigate("/");
    }
  }, [user, navigate]);
  return (
    <div className="min-h-[calc(100vh-120px)] md:flex hidden ">
      <aside className="bg-gray-50 min-h-full w-full max-w-60">
        <div className="h-32 flex justify-center items-center flex-col mt-8">
          <div className=" text-3xl cursor-pointer relative ">
            {user?.profilePic ? (
              <img
                className="w-20 h-20 rounded-full"
                src={user?.profilePic}
                alt={user?.name}
              />
            ) : (
              <FaRegCircleUser />
            )}
          </div>
          <div>
            <p className="text-lg font-semibold mt-4">{user?.name}</p>
            <p className="text-sm">{user?.role}</p>
          </div>
        </div>
        <div className="px-3 mt-5 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                to={"all-users"}
                className="flex items-center text-base p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <FaUsers />
                <span className="ms-3">All Users</span>
              </Link>
            </li>
            <li>
              <Link
                to={"add-products"}
                className="flex items-center text-base p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <IoBagAddOutline />
                <span className="ms-3">Add Product</span>
              </Link>
            </li>
            <li>
              <Link
                to={"all-products"}
                className="flex items-center text-base p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <FaBorderAll />
                <span className="ms-3">All Products</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
      <main className="w-full h-full">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminDashboard;
