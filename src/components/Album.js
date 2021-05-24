import React from "react";
import { ListGroupItem } from "reactstrap";

export const Album = ({ title }) => {
  return (
    <ListGroupItem className="text-left">
      <h5>{title}</h5>
    </ListGroupItem>
  );
};
