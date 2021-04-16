import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography as T } from "@material-ui/core";

const useStyles = makeStyles({
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
});

let Comment = ({ comment, index }) => {
  const classes = useStyles();
  console.log(index);
  return (
    <div className={classes.comment} key={index}>
      <T className={classes.title} color="primary" gutterBottom>
        {comment.name}
      </T>
      <T className={classes.pos} color="textSecondary">
        {comment.body}
      </T>
      <T className={classes.posEmail} color="textSecondary" gutterBottom>
        <>{comment.email}</>
      </T>
    </div>
  );
};

export default Comment;
