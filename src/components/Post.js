import React from "react";
import { ListGroupItem } from "reactstrap";

export const Post = ({ title, body }) => {
  return (
    <ListGroupItem className="text-left">
      <h4>{title}</h4>
      <p>{body}</p>
    </ListGroupItem>
  );
};
