import { NavLink } from "solid-app-router";
import { Component } from "solid-js";

const Nav: Component = () => {
  return (
    <nav class="mt-5 mb-3">
      <NavLink href="/" class="btn btn-primary me-2">
        Home
      </NavLink>
      <NavLink href="/savedrepos" class="btn btn-primary me-2">
        Saved ~ 5
      </NavLink>
    </nav>
  );
};

export default Nav;
