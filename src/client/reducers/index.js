import { combineReducers } from "redux";
import AuthReducer from "./authReducer";
import usersReducer from "./usersReducer";

export default combineReducers({
  users: usersReducer,
  auth: AuthReducer,
});
