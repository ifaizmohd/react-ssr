export const FETCH_USERS = "fetch_users";

export const fetchUsers = () => async (dispatch, getState, api) => {
  const res = await api.get("/users");
  dispatch({
    type: FETCH_USERS,
    payload: res.data,
  });
};

export const FETCH_CURRENT_USER = "fetch_current_user";
export const fetch_current_user = () => async (dispatch, getState, api) => {
  const res = await api.get("/current_user");
  dispatch({
    type: FETCH_CURRENT_USER,
    payload: res.data,
  });
};

export const FETCH_ADMINS = "FETCH_ADMINS";
export const fetchAdmins = () => async (dispatch, getState, api) => {
  const res = await api.get("/admins");
  dispatch({
    type: FETCH_ADMINS,
    payload: res.data,
  });
};
