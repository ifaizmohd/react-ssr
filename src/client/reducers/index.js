import { combineReducers } from "redux";
import AdminReducer from "./adminsReducer";
import AuthReducer from "./authReducer";
import usersReducer from "./usersReducer";

export default combineReducers({
  users: usersReducer,
  auth: AuthReducer,
  admins: AdminReducer,
});
