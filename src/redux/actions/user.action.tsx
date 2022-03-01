import { UserStateI } from "../constants/user.contants";

const getUserInfo = (user: UserStateI): any => {
  return {
    type: "GET_USER",
    user,
  };
};
export const userActions = {
  getUserInfo,
};
