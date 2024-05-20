import React from "react";
import { NavLink } from "react-router-dom";

export const NavBarBrand = () => {
  return (
    <div className="nav-bar__brand">
      <NavLink to="/">
        <img
          className="nav-bar__logo"
          src="https://khaihsn.xyz/wp-content/uploads/2024/05/vr-glasses.png"
          alt="Auth0 shield logo"
          width="122"
          height="36"
        />
      </NavLink>
    </div>
  );
};
