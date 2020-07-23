import { createStore } from "redux";
const LOGIN_PENDING = "LOGIN_PENDING";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_ERROR = "LOGIN_ERROR";
export const ADD_COMMENT = "ADD_COMMENT";

export const addComment = (comment) => ({
  type: ADD_COMMENT,
  payload: comment,
});
export function setLoginPending(isLoginPending) {
  return {
    type: LOGIN_PENDING,
    isLoginPending,
  };
}

export function setLoginSuccess(isLoginSuccess) {
  return {
    type: LOGIN_SUCCESS,
    isLoginSuccess,
  };
}

export function setLoginError(LoginError) {
  return {
    type: LOGIN_ERROR,
    LoginError,
  };
}

export default function reducer(
  state = {
    isLoginPending: false,
    isLoginSuccess: false,
    isLoginError: null,

    comments: [
      {
        id: 1,
        author: "landiggity",
        body: "This is my first comment on this forum so don't be a dick",
        initialComment: new Date("June 10,2020").getTime(),
      },
      {
        id: 2,
        author: "scarlett-jo",
        body:
          "That's a mighty fine comment you've got there my good looking fellow...",

        initialComment: new Date("June 04,2020").getTime(),
      },
      {
        id: 3,
        author: "rosco",
        body: "What is the meaning of all of this 'React' mumbo-jumbo?",
        initialComment: new Date("June 01,2020").getTime(),
      },
    ],
  },
  action
) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoginSuccess: action.isLoginSuccess,
      };
    case LOGIN_PENDING:
      return {
        ...state,
        isLoginPending: action.isLoginPending,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        isLoginError: action.isLoginError,
      };
    case ADD_COMMENT:
      return { ...state, comments: [...state.comments, action.payload] };

    default:
      return state;
  }
}
