import React from "react";
import { ListGroup } from "reactstrap";
import { DynamicItem } from "./DynamicItem";

export default function({ items, filter }) {
  if (!items) {
    return;
  }

  return (
    <ListGroup flush>
      {items.map(item => {
        return <DynamicItem key={item.id} componentName={filter} item={item} />;
      })}
    </ListGroup>
  );
}
