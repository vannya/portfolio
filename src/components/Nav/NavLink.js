import React from "react";
import { Link } from "@reach/router";

const NavLink = ({ menuType, ...rest }) => {
  return (
    <Link
      {...rest}
      getProps={({ isCurrent }) => {
        if (menuType === "desktop") {
          return {
            style: {
              borderBottom: isCurrent ? "2px solid #fff" : "none"
            }
          };
        } else {
          return {
            style: {
              backgroundColor: isCurrent ? "#3798BF" : "transparent"
            }
          };
        }
      }}
    />
  );
};

export default NavLink;
