import React from "react";
import { ListGroupItem } from "reactstrap";

export const User = ({ name, username, email }) => {
  return (
    <ListGroupItem className="text-left">
      <div className="row">
        <div className="col-4 font-weight-bold text-right">Name</div>
        <div className="col-8 text-left">{name}</div>
      </div>
      <div className="row">
        <div className="col-4 font-weight-bold text-right">Username</div>
        <div className="col-8 text-left">{username}</div>
      </div>
      <div className="row">
        <div className="col-4 font-weight-bold text-right">Email</div>
        <div className="col-8 text-left">{email}</div>
      </div>
    </ListGroupItem>
  );
};
