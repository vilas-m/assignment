import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Typography as T } from "@material-ui/core";
import { useSelector } from "react-redux";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import { CardHeader, IconButton } from "@material-ui/core";
import Comment from "../../components/Comment";
import { Link, useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    minWidth: "90%",
    maxWidth: "90%",
    height: "90%",
  },
  title: {
    fontSize: 18,
  },
  posEmail: {
    marginBottom: 12,
    float: "right",
  },
  comment: {
    marginBottom: 30,
  },
  commentList: {
    height: "100%",
  },
});

function Post(props) {
  const classes = useStyles();
  let userPost = useSelector((state) => state.userPost);
  let users = useSelector((state) => state.users);
  let comments = useSelector((state) => state.comments);
  let [user, setUser] = useState({});
  let history = useHistory();

  useEffect(() => {
    user = users.find((i) => i.id === userPost.userId);
    setUser(user);
  }, [users]);

  return (
    <Card className={classes.root}>
      <CardHeader
        action={
          <IconButton aria-label="back" onClick={() => history.goBack()}>
            <KeyboardBackspaceIcon />
          </IconButton>
        }
        title={userPost.title}
      />
      <CardContent className={classes.commentList}>
        <T className={classes.pos} color="textSecondary">
          Posted by <Link to="/user"> {user ? user.username : ""}</Link>
        </T>
        <br></br>
        <T variant="body2" component="p">
          {userPost.body}
        </T>
        <hr></hr>
        <T className={classes.pos} color="textSecondary">
          Comments: <br></br>
          <br></br>
        </T>
        <div>
          {comments.map((comment, index) => {
            return <Comment comment={comment} index={index} />;
          })}
        </div>
      </CardContent>
    </Card>
  );
}

export default Post;
