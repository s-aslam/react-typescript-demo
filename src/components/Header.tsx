import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IInitialState } from "../models";
import { PURGE_AUTH } from "../store/actions";

export const Header: React.FC = () => {
  const isAuthenticated = useSelector(
    (state: IInitialState) => state.isAuthenticated
  );
  const dispatch = useDispatch();

  return (
    <Navbar bg="light" expand="lg">
      <Link to="/">
        <Navbar.Brand className="text-primary">
          React TyepeScript Demo
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav>
          <Link to="/">Home</Link>
        </Nav>
        <Nav>
          <Link to="/about-us">About US</Link>
        </Nav>
        <Nav>
          {isAuthenticated ? (
            <span
              className="text-primary"
              style={{ cursor: "pointer" }}
              onClick={() =>
                dispatch({
                  type: PURGE_AUTH,
                  value: null,
                })
              }
            >
              Logout
            </span>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
