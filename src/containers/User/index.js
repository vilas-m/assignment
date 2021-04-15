import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { useSelector } from "react-redux";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import { CardHeader, IconButton } from "@material-ui/core";
import Select from "react-select";

const useStyles = makeStyles({
  root: {
    minWidth: 700,
  },
  title: {
    fontSize: 18,
  },
  pos: {
    marginBottom: 12,
  },
  backButton: {
    position: "relative",
    right: 0,
    minWidth: 700,
    top: 0,
  },
  select: {
    width: 500,
  },
});

function User(props) {
  const classes = useStyles();
  let userId = useSelector((state) => state.selectedUser);
  let users = useSelector((state) => state.users);
  let [user, setUser] = useState({});

  useEffect(() => {
    let user = users.find((i) => i.id === userId);
    setUser(user);
  }, []);

  let goBack = () => {
    props.changePage("home");
  };

  let changeUser = (newUser) => {
    let user = users.find(
      (i) => i.username.toLowerCase() === newUser.toLowerCase()
    );
    if (user) {
      setUser(user);
    }
  };

  return (
    <>
      <Card className={classes.root}>
        <Select
          classname={classes.select}
          options={users.map((i) => {
            return { value: i.username, label: i.username };
          })}
          onChange={(e) => {
            changeUser(e.value);
          }}
        />
        <CardHeader
          action={
            <IconButton aria-label="settings" onClick={() => goBack()}>
              <KeyboardBackspaceIcon />
            </IconButton>
          }
        />
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {user.username}
          </Typography>
          <Typography variant="h4" component="h2">
            {user.name}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {user.website}  <address><i>{user.email} </i></address>
          </Typography>
          <hr></hr>
          <Typography variant="body2" color="textSecondary">
            Company Details: <br></br>
          </Typography>
          <Typography variant="h5" component="h2">
            {user.company ? user.company.name : ""}
          </Typography>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {user.company ? user.company.bs : ""}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {user.company ? user.company.catchPhrase : ""}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

export default User;
