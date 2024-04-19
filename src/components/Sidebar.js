import React, { useState } from "react";
import "./Sidebar.css";
import Create from "../assets/add.png";
import Read from "../assets/list.png";
import Update from "../assets/edit.png";
import Delete from "../assets/cancel.png";
import { Link } from "react-router-dom";

function Sidebar() {
  const [productId, setProductId] = useState(0);

  const handleIdChange = (e) => {
    setProductId(e.target.value);
  };

  return (
    <div>
      <div className="sidebar">
        <p>T-Alpha</p>
        <Link to="/new-product">
          <img src={Create} alt="create" />
        </Link>
        <Link to="/products">
          <img src={Read} alt="read" />
        </Link>
        <Link to={`/edit-product/${productId}`}>
          <img src={Update} alt="update" />
        </Link>
        <Link to={`/delete-product/${productId}`}>
          <img src={Delete} alt="delete" />
        </Link>
      </div>
      <input
        type="number"
        placeholder="Id"
        className="idSelector"
        value={productId}
        onChange={handleIdChange}
      />
    </div>
  );
}

export default Sidebar;
