import React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { PageHelper, Paths } from "../../Router";
import { connect } from "react-redux";
import { UserI } from "../../../redux/constants/user.constants";

interface ConnectedProps {
  user: UserI;
}
export interface StateProps {
  user: UserI;
}
export type HeaderNavProps = ConnectedProps;

const HeaderNav: React.FC<HeaderNavProps> = (props) => {
  const { user } = props;
  const handleRedirect = (path: string) => {
    PageHelper.openPage(path);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {`${user.firstName} ${user.lastName}`}
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Button
              variant="text"
              sx={{ color: "white" }}
              onClick={() => handleRedirect(Paths.home)}
            >
              Home
            </Button>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Button
              variant="text"
              sx={{ color: "white" }}
              onClick={() => handleRedirect(Paths.about)}
            >
              About
            </Button>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Button
              variant="text"
              sx={{ color: "white" }}
              onClick={() => handleRedirect(Paths.dashboard)}
            >
              Dashboard
            </Button>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

const mapStateToProps = (state: any): StateProps => ({
  user: state.user,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderNav);
