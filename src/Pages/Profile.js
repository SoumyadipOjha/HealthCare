import React, { useContext, useEffect } from "react";
import { Context } from "../main";
import HeaderComponent from "../Components/HeaderComponent";
import toast from "react-hot-toast";

const UserProfile = (props) => {
  const { user, isAuthenticated } = useContext(Context);
  useEffect(() => {
    if (!isAuthenticated) {
      toast.error("Login to View Profile!");
      window.location = "/login";
    }
  }, []);

  return (
    <div>
      <HeaderComponent />
      <div className="flex items-center h-screen w-full justify-center dark:bg-base-200">
        <div className="max-w-xs dark:bg-base-300 dark:text-white">
          <div className="bg-white shadow-xl rounded-lg py-3 dark:bg-base-300 dark:text-white">
            <div className="photo-wrapper p-2  dark:text-white">
              <img
                className="w-32 h-32 rounded-full mx-auto"
                src={user ? user?.user_icon?.url : ""}
              />
            </div>
            <div className="p-2 dark:bg-base-300 dark:text-white">
              <h3 className="text-center  dark:text-white text-xl text-gray-900 font-medium leading-8">
                {user.name}
              </h3>
              <div className="text-center  dark:text-white text-gray-400 text-xs font-semibold">
                <p>User</p>
              </div>
              <table className="text-xs my-3">
                <tbody>
                  <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">
                      Email
                    </td>
                    <td className="px-2 py-2">{user.email}</td>
                  </tr>
                  <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">
                      Phone
                    </td>
                    <td className="px-2 py-2">+91 {user.phone}</td>
                  </tr>
                </tbody>
              </table>
              <div className="text-center my-3">
                <a
                  className="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium"
                  href="#"
                >
                  View Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
