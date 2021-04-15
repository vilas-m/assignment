import {
  GET_USERS,
  SET_USER,
  SET_POST,
  GET_POSTS,
  GET_COMMENTS,
} from "../constants/action-types";
import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export function getUsers() {
  return (dispatch) => {
    dispatch({ type: GET_USERS });
    return axios
      .get(`${BASE_URL}/users`)
      .then((users) => dispatch({ type: GET_USERS, payload: users }));
  };
}

export function setUser(userId) {
  return { type: SET_USER, payload: userId };
}

export function setPost(post) {
  return { type: SET_POST, payload: post };
}

export function getPosts() {
  return (dispatch) => {
    dispatch({ type: GET_POSTS });
    return axios
      .get(`${BASE_URL}/posts`)
      .then((posts) => dispatch({ type: GET_POSTS, payload: posts }));
  };
}

export function getComments(id) {
  return (dispatch) => {
    dispatch({ type: GET_COMMENTS, payload: {data: []} });
    return axios
      .get(`${BASE_URL}/comments?postId=${id}`)
      .then((response) =>{
        dispatch({ type: GET_COMMENTS, payload: response })});
  };
}
