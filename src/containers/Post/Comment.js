import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

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

  return (
    <div className={classes.comment} key={index}>
      <Typography className={classes.title} color="primary" gutterBottom>
        {comment.name}
      </Typography>
      <Typography className={classes.pos} color="textSecondary">
        {comment.body}
      </Typography>
      <Typography
        className={classes.posEmail}
        color="textSecondary"
        gutterBottom
      >
        <address>{comment.email}</address>
      </Typography>
    </div>
  );
};

export default Comment;
