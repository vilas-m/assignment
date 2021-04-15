import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { useSelector } from "react-redux";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import { CardHeader, IconButton } from "@material-ui/core";
import Comment from "./Comment";

const useStyles = makeStyles({
  root: {
    minWidth: '90%',
    maxWidth: "90%",
    height: '90%',
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
      height: '100%',
  }
});

function Post(props) {
  const classes = useStyles();
  let post = useSelector((state) => state.post);
  let userId = useSelector((state) => state.selectedUser);
  let users = useSelector((state) => state.users);
  let comments = useSelector((state) => state.comments);
  let [user, setUser] = useState({});

  useEffect(() => {
    user = users.find((i) => i.id === userId);
    setUser(user);
  }, [users]);

  let goBack = () => {
    props.changePage("home");
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        action={
          <IconButton aria-label="back" onClick={() => goBack()}>
            <KeyboardBackspaceIcon />
          </IconButton>
        }
      />
      <CardContent className={classes.commentList}>
        <Typography variant="h5" component="h2">
          {post.title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Posted by {user ? user.username : ""}
        </Typography>
        <Typography variant="body2" component="p">
          {post.body}
        </Typography>
        <hr></hr>
        <Typography className={classes.pos} color="textSecondary">
          Comments:
        </Typography>
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
