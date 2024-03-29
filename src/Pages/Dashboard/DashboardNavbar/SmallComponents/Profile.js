import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../Contexts/AuthProvider/AuthProvider";
import userIcon from "../../../../Assets/icon/user.png";
import { toast } from "react-hot-toast";

const Profile = () => {
  const { admin, teacher, student } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/select-role");
    toast.success("Successfully Logout from Your Account!!");
  };

  return (
    <div className="dropdown dropdown-end rounded-[50%] avatar online">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="xl:w-12 lg:w-10 rounded-full">
          <img
            src={
              (admin && admin.photo) ||
              (teacher && teacher?.photo) ||
              (student && student?.photo) ||
              userIcon
            }
            alt="user-img"
          />
        </div>
      </label>
      <ul
        tabIndex={0}
        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li className="hover-bordered">
          <Link
            className="justify-between"
            to={`/dashboard/${
              (admin && admin.role?.toLowerCase()) ||
              (teacher && teacher?.role?.toLowerCase()) ||
              (student && student?.role?.toLowerCase())
            }/update-profile`}
          >
            Profile
            <span className="badge bg-[#FFBE15] font-semibold">New</span>
          </Link>
        </li>
        <li className="hover-bordered">
          <button type="submit" onClick={handleLogOut}>
            Log Out
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
