import {
  UserActionTypes,
  userDefaultState,
  UserI,
  USER_ACTION_TYPES,
} from "../constants/user.constants";

const user = (
  state: UserI = userDefaultState,
  action: UserActionTypes
): any => {
  switch (action.type) {
    case USER_ACTION_TYPES.GET_USER_SUCCESS:
      return { ...state };
    case USER_ACTION_TYPES.UPDATE_USER_SUCCESS:
      return { ...state };
    default:
      return state;
  }
};

export default user;
