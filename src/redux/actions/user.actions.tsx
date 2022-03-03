import {
  GetUserAction,
  UserI,
  USER_ACTION_TYPES,
} from "../constants/user.constants";

const getUser = (user: UserI): GetUserAction => {
  return {
    type: USER_ACTION_TYPES.GET_USER_SUCCESS,
    user,
  };
};

export const userActions = {
  getUser,
};
