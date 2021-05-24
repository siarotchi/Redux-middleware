import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";

export default class extends Component {
  render() {
    return (
      <Navbar color="dark" light expand="md">
        <NavbarBrand
          className="text-warning"
          href="https://jsonplaceholder.typicode.com/"
          target="_blank"
        >
          JSON Placeholder API
        </NavbarBrand>
      </Navbar>
    );
  }
}
