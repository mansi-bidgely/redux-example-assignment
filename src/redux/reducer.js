import Promise from "es6-promise";
const LOGIN_PENDING = "LOGIN_PENDING";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_ERROR = "LOGIN_ERROR";
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

/* export function login(email, password) {
  return (dispatch) => {
    dispatch(setLoginPending(true));
    dispatch(setLoginSuccess(false));
    dispatch(setLoginError(null));
    sendLoginRequest(email, password)
      .then((success) => {
        dispatch(setLoginPending(false));
        dispatch(setLoginSuccess(true));
        dispatch(setLoginError());
      })
      .catch((error) => {
        dispatch(setLoginPending(false));
        dispatch(setLoginError(error));
      });
  };
} */
export default function reducer(
  state = {
    isLoginPending: false,
    isLoginSuccess: false,
    isLoginError: null,
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
    default:
      return state;
  }
}
