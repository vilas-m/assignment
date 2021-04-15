import {
  GET_USERS,
  GET_POSTS,
  GET_COMMENTS,
  SET_USER,
  SET_POST,
} from "../constants/action-types";

const initialState = {
  count: 0,
  users: [],
  posts: [],
  comments: [],
  selectedUser: null,
  post: {},
};

function rootReducer(state = initialState, action) {
  if (action.type === GET_USERS) {
    state.users = action.payload ? action.payload.data : [];
  } else if (action.type === GET_POSTS) {
    state.posts = action.payload ? action.payload.data : [];
  } else if (action.type === SET_POST) {
    state.post = action.payload;
  } else if (action.type === GET_COMMENTS) {
    state.comments = action.payload ? action.payload.data : [];
  } else if (action.type === SET_USER) {
    state.selectedUser = action.payload;
  }
  return state;
}

export default rootReducer;
