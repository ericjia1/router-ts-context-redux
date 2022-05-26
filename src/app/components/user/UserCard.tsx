import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { connect } from "react-redux";

interface UserCardI {
  firstName: string;
  lastName: string;
  title?: string;
  image?: string;
}

export const UserCard = (props: UserCardI) => {
  const { firstName, lastName, title, image } = props;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        image={
          image
            ? image
            : "https://3nuqqh2rpg4r3luba5jjzxa9-wpengine.netdna-ssl.com/wp-content/uploads/2020/07/LiveVox_Logo-PMS-horizontal.svg"
        }
        alt="personal image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {firstName} {lastName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {title ? title : "Title not Available"}
        </Typography>
      </CardContent>
    </Card>
  );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(UserCard);
