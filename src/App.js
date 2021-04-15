import React, { useEffect } from "react";
import HomePage from "../src/containers/HomePage";
import User from "../src/containers/User";
import Post from "../src/containers/Post";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { getUsers, getPosts } from "./redux/actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
    dispatch(getPosts());
  });

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
      <Router>
        <Switch>
          <Route path="/post">
            <Post />
          </Route>
          <Route path="/user">
            <User />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
