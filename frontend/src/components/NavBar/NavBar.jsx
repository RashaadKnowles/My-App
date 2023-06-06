import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";


const Navbar = () => {
  const { logoutUser, user,createReview } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="navBar">
      <ul>
        <li className="brand">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <b>Link T&D</b>
          </Link>
        </li>
        <li>
          {user ? (<>
            <button onClick={logoutUser}>Logout</button>

            <button onClick={() => navigate("/dispatcherlist")}>List Of Dispatchers</button>
            <button onClick={() => navigate("/oolist")}>List Of Owner Operators</button>
            <button onClick={() => navigate(`/dispatcher/${user.id}` )}>Profile Page</button>
            <button onClick={() => navigate(`/showprofile/${user.id}` )}>User Profile</button></>
          ) : (
            <button onClick={() => navigate("/login")}>Login</button>
          )  
          }
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
