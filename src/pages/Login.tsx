import React from "react";
import { LoginForm } from "../components/LoginForm";

export const Login: React.FC = () => {
  return (
    <div className="card">
      <article className="card-body">
        <h4 className="card-title text-center mb-4 mt-1">Log in</h4>
        <hr />
        <p className="text-success text-center">Welcome to Login</p>
        <LoginForm />
      </article>
    </div>
  );
};
