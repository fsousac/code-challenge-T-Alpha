import React from "react";
import "./Sidebar.css";
import Create from "../assets/add.png";
import Read from "../assets/list.png";
import Update from "../assets/edit.png";
import Delete from "../assets/cancel.png";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <p>T-Alpha</p>
      <Link to="/new-product">
        <img src={Create} alt="create" />
      </Link>
      <Link to="/products">
        <img src={Read} alt="read" />
      </Link>
      <Link to={`/edit-product`}>
        <img src={Update} alt="update" />
      </Link>
      <Link to={`/delete-product`}>
        <img src={Delete} alt="delete" />
      </Link>
    </div>
  );
}

export default Sidebar;
