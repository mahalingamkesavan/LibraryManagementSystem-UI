import { Fragment } from "react";
import { Link } from "react-router-dom";
import  logout  from "../../../shared/hooks/Logout";
import { useSelector } from "react-redux";

import "../style/Navigator.Styles.css";


const Navigator = () => {
  const userInformation=useSelector((state)=>state.user.data)
   
  return (
    <Fragment>
      <div className="navigation">
      <div className="nav-links-container">
          <Link className="nav-link" onClick={()=>logout()}>Logout</Link>
        </div>
        <div className="nav-links-container">
          <Link className="nav-link" to="myProfile">My Profile</Link>
        </div>
        {userInformation.role==="Admin"&&<div className="nav-links-container">
          <Link className="nav-link" to ="notification">Notification</Link>
        </div>}
      </div>
    </Fragment>
  );
};
export default Navigator;
