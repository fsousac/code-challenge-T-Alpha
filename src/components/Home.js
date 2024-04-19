import React from "react";

function Home() {
  if (localStorage.getItem("logged") !== "true") {
    window.location.replace("http://localhost:3000/login");
  }
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

export default Home;
