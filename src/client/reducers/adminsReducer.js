import { FETCH_ADMINS } from "../actions";

const AdminReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ADMINS:
      return action.payload;
    default:
      return state;
  }
};

export default AdminReducer;
