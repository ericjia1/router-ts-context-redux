import { UserStateI } from "../constants/user.contants";

const initialState: UserStateI = {
  firstName: "",
  lastName: "",
};

const user = (state: UserStateI = initialState, action: any): UserStateI => {
  switch (action.type) {
    case "GET_USER":
      return { ...state };
    default:
      return state;
  }
};

export default user;
