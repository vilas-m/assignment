import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getUsers,
  getPosts,
  setUser,
  setPost,
  getComments,
} from "../../redux/actions";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  root: {
    minWidth: '90%',
    maxWidth: '90%',
    margin: 5,
  },
  title: {
    fontSize: 18,
  },
});

const HomePage = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  let users = useSelector((state) => state.users);
  let posts = useSelector((state) => state.posts);
  let uniqueUsers = {};

  useEffect(() => {
    dispatch(getUsers());
    dispatch(getPosts());
  }, []);

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
    dispatch(setUser(post.userId));
    props.changePage("user");
  };

  let handleCardClick = (post) => {
    dispatch(setUser(post.userId));
    dispatch(setPost(post));
    dispatch(getComments(post.id));
    props.changePage("post" );
  };

  return (
    <div>
      {posts.map((post, index) => {
        return (
          <Card className={classes.root} key={index}>
            <CardContent onClick={() => handleCardClick(post)}>
              <Typography variant="h5" component="h2">
                {post.title}
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                Posted by
                <Button onClick={(e) => handlUserClick(e, post)}>
                  {getUserName(post.userId)}
                </Button>
              </Typography>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default HomePage;
