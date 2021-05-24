import React from "react";

import { filterTypes } from "../constants/constants";
import { User } from "./User";
import { Post } from "./Post";
import { Album } from "./Album";

export const DynamicItem = ({ componentName, item }) => {
  switch (componentName) {
    case filterTypes.users:
      return <User {...item} />;
    case filterTypes.posts:
      return <Post {...item} />;
    case filterTypes.albums:
      return <Album {...item} />;
    default:
      return <div>Invalid Component Name</div>;
  }
};
