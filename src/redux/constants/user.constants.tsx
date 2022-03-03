export interface UserI {
  firstName: string;
  lastName: string;
}

export enum USER_ACTION_TYPES {
  GET_USER_SUCCESS = "GET_USER_SUCCESS",
}

export const userDefaultState: UserI = {
  firstName: "",
  lastName: "",
};

export interface GetUserAction {
  type: typeof USER_ACTION_TYPES.GET_USER_SUCCESS;
  user: UserI;
}

export type UserActionTypes = GetUserAction;
