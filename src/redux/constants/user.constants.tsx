export interface UserI {
  firstName: string;
  lastName: string;
}

export enum USER_ACTION_TYPES {
  GET_USER_SUCCESS = "GET_USER_SUCCESS",
  UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS",
  RESET_USER_SUCCESS = "RESET_USER_SUCCESS",
}

export const userDefaultState: UserI = {
  firstName: "John",
  lastName: "Doe",
};

export interface GetUserAction {
  type: typeof USER_ACTION_TYPES.GET_USER_SUCCESS;
  user: UserI;
}

export interface UpdateUserAction {
  type: typeof USER_ACTION_TYPES.UPDATE_USER_SUCCESS;
  user: UserI;
}

export interface ResetUserAction {
  type: typeof USER_ACTION_TYPES.RESET_USER_SUCCESS;
  user: UserI;
}

export type UserActionTypes = GetUserAction | UpdateUserAction | ResetUserAction;
