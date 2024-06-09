import { useEffect, useState } from "react";
import SummaryApi from "../../common";
import toast from "react-hot-toast";
import moment from "moment";
import ChangeUserRole from "../../Components/ChangeUserRole/ChangeUserRole";
import { MdModeEdit } from "react-icons/md";
const AllUsers = () => {
  const [allUser, setAllUsers] = useState([]);
  const [openUpdateRole, setOpenUpdateRole] = useState(false);
  const [updateUserDetails, setUpdateUserDetails] = useState({
    email: "",
    name: "",
    role: "",
    _id: "",
  });
  const fetchAllUsers = async () => {
    const fetchData = await fetch(SummaryApi.allUsers.url, {
      method: SummaryApi.allUsers.method,
      credentials: "include",
    });
    const dataResponse = await fetchData.json();
    if (dataResponse.success) {
      setAllUsers(dataResponse.data);
    }

    if (dataResponse.error) {
      toast.error(dataResponse.message);
    }
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);
  return (
    <div className="">
      <div>
        <h1 className="text-2xl md:text-3xl mt-16 mb-8 text-center font-sans font-bold dark:text-gray-200">
          <span className="border-l-4 border-slate-900 pl-2">
            All The Active Users
          </span>
        </h1>
      </div>
      <div className="relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-white uppercase bg-slate-900 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-2 py-3">
                Sr.
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Role
              </th>
              <th scope="col" className="px-6 py-3">
                Created Date
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {allUser.map((el, index) => {
              return (
                <tr
                  key={el._id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="px-6 py-4">{index + 1}</td>
                  <td className="px-6 py-4">{el?.name}</td>
                  <td className="px-6 py-4">{el?.email}</td>
                  <td className="px-6 py-4">{el?.role}</td>
                  <td className="px-6 py-4">
                    {moment(el?.createdAt).format("LLLL")}
                  </td>
                  <td>
                    <button
                      className="bg-green-100 p-2 rounded-full cursor-pointer hover:bg-green-500 hover:text-white"
                      onClick={() => {
                        setUpdateUserDetails(el);
                        setOpenUpdateRole(true);
                      }}
                    >
                      <MdModeEdit />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div>
        {openUpdateRole && (
          <ChangeUserRole
            onClose={() => setOpenUpdateRole(false)}
            name={updateUserDetails.name}
            email={updateUserDetails.email}
            role={updateUserDetails.role}
            userId={updateUserDetails._id}
            callFunc={fetchAllUsers}
          />
        )}
      </div>
    </div>
  );
};

export default AllUsers;
