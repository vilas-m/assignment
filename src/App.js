import React, { useState } from "react";
import HomePage from "../src/containers/HomePage";
import User from "../src/containers/User";
import Post from "../src/containers/Post";

function App() {
  let [page, setPage] = useState("home");

  let changePage = (page) => {
    setPage(page);
  };

  let renderSwitch = (param) => {
    switch (param) {
      case "home":
        return <HomePage changePage={changePage} />;
      case "user":
        return <User changePage={changePage} />;
      case "post":
        return <Post changePage={changePage} />;
    }
  };

  return (
    <div
      style={{
        height: "95",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: 30,
        marginBottom: 30,
      }}
    >
      {renderSwitch(page)}
    </div>
  );
}

export default App;
