import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Typography as T } from "@material-ui/core";
import { useSelector } from "react-redux";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import { CardHeader, IconButton } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import Search from "../../components/Search";

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
  searchBar: {
    margin: 15,
  },
});

function User(props) {
  const classes = useStyles();
  let users = useSelector((state) => state.users);
  let userPost = useSelector((state) => state.userPost);
  let [user, setUser] = useState({});
  let history = useHistory();

  useEffect(() => {
    let user = users.find((i) => i.id === userPost.userId);
    setUser(user);
  }, [users, userPost]);

  let changeUser = (newUser) => {
    let user = users.find((i) => i.username.toLowerCase() === newUser);
    if (user) {
      setUser(user);
    }
  };

  return (
    <>
      <Card className={classes.root}>
        <div className={classes.searchBar}>
          <Search users={users} changeUser={changeUser} />
        </div>
        <CardHeader
          action={
            <IconButton aria-label="settings" onClick={() => history.goBack()}>
              <KeyboardBackspaceIcon />
            </IconButton>
          }
          title={user ? user.name : ""}
          subheader={user ? user.username : ""}
        />
        <CardContent>
          <T className={classes.pos} color="textSecondary">
            {user ? user.website : ""}
            <>
              <i>{user ? user.email : ""} </i>
            </>
          </T>
          <hr></hr>
          <T variant="body2" color="textSecondary">
            Company Details: <br></br>
          </T>
          <T variant="h6" component="h2">
            {user ? (user.company ? user.company.name : "") : ""}
          </T>
          <T className={classes.title} color="textSecondary" gutterBottom>
            {user ? (user.company ? user.company.bs : "") : ""}
          </T>
          <T className={classes.pos} color="textSecondary">
            {user ? (user.company ? user.company.catchPhrase : "") : ""}
          </T>
        </CardContent>
      </Card>
    </>
  );
}

export default User;
