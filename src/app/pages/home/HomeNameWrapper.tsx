import React from "react";
import { connect } from "react-redux";
import { userActions } from "../../../redux/actions/user.actions";
import { UserI } from "../../../redux/constants/user.constants";
import HomeInput from "./HomeInput";

interface IOwnProps {}
interface IConnectedProps {
  user: UserI;
  updateUser: any;
}
interface IDispatchProps {}

export type HomeNameWrapperProps = IOwnProps & IConnectedProps & IDispatchProps;

function HomeNameWrapper(props: HomeNameWrapperProps) {

  const {user, updateUser} = props;

  const handleOnFirstNameInputChange = (firstNameInput: string) => {
    let userSave: UserI = user;
    userSave.firstName = firstNameInput;
    updateUser(userSave);
  }


  const handleOnLastNameInputChange = (lastNameInput: string) => {
    let userSave: UserI = user;
    userSave.lastName = lastNameInput;
    updateUser(userSave);
  }

  return (
    <>
      <br />
      <HomeInput
        onInputChange={handleOnFirstNameInputChange}
        title={"First name Input using Redux"}
        notes="Type here to change First Name"
        defaultValue={user.firstName}
      />
        <HomeInput
        onInputChange={handleOnLastNameInputChange}
        title={"Last name Input using Redux"}
        notes="Type here to change Last Name"
        defaultValue={user.lastName}
      />
    </>
  );
}

const mapStateToProps = (state: any) => ({ user: state.user });
const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return {
    updateUser: (user: UserI) => {
      dispatch(userActions.updateUser(user));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HomeNameWrapper);