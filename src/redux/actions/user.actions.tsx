import {
  GetUserAction,
  ResetUserAction,
  UpdateUserAction,
  UserI,
  USER_ACTION_TYPES,
} from "../constants/user.constants";

const getUser = (user: UserI): GetUserAction => {
  return {
    type: USER_ACTION_TYPES.GET_USER_SUCCESS,
    user,
  };
};

const updateUser = (user: UserI): UpdateUserAction => {
  return {
    type: USER_ACTION_TYPES.UPDATE_USER_SUCCESS,
    user,
  };
}

const resetUser = (user: UserI): ResetUserAction => {
  return {
    type: USER_ACTION_TYPES.RESET_USER_SUCCESS,
    user,
  };
};

export const userActions = {
  getUser,
  resetUser,
  updateUser
};
