import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserPost, getComments } from "../../redux/actions";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import { Typography as T } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    minWidth: "90%",
    maxWidth: "90%",
    margin: 5,
  },
  title: {
    fontSize: 18,
  },
});

const HomePage = () => {
  const classes = useStyles();
  const users = useSelector((state) => state.users);
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const history = useHistory();

  let uniqueUsers = {};

  let getUserName = (userId) => {
    if (!uniqueUsers[userId]) {
      let user = users.find((i) => i.id === userId);
      if (user) {
        uniqueUsers[userId] = user.username;
        return user.username;
      }
    } else {
      return uniqueUsers[userId];
    }
  };

  let handlUserClick = (e, post) => {
    e.stopPropagation();
    dispatch(setUserPost(post));
  };

  let handleCardClick = (post) => {
    dispatch(setUserPost(post));
    dispatch(getComments(post.id));
    history.push("/post");
  };

  return (
    <div>
      {posts.map((post, index) => {
        return (
          <Card className={classes.root} key={index}>
            <CardContent onClick={() => handleCardClick(post)}>
              <T variant="h5" component="h2">
                {post.title}
              </T>
              <T className={classes.pos} color="textSecondary">
                Posted by{" "}
                <Link onClick={(e) => handlUserClick(e, post)} to="/user">
                  {getUserName(post.userId)}
                </Link>
              </T>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default HomePage;
