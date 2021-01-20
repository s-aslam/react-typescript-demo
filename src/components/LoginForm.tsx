import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { FaUserAlt, FaLock } from "react-icons/fa";
import { Formik } from "formik";
import * as Yup from "yup";

import { ILogin } from "../models/login";
import { SET_AUTH } from "../store/actions";
import { TOKEN_KEY } from "../config/constant";

export const LoginForm: React.FC = () => {
  const initialValues: ILogin = { username: "", password: "" };
  const dispatch = useDispatch();
  const [errorText, setErrorText] = useState<string | null>(null);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values) => {
        if (values.username === "admin" && values.password === "admin") {
          localStorage.setItem(TOKEN_KEY, "admiin");
          dispatch({
            type: SET_AUTH,
            value: { firstName: "admin", lastName: "admin" },
          });
        } else {
          setErrorText("Invalid Username & passowrd");
        }
      }}
      validationSchema={Yup.object().shape({
        username: Yup.string().required("Username Required"),
        password: Yup.string().required("Password Required"),
      })}
    >
      {(props) => {
        const {
          values,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
        } = props;
        return (
          <>
            {errorText && <div className="text-danger">{errorText}</div>}
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <FaUserAlt />
                    </span>
                  </div>
                  <input
                    name="username"
                    placeholder="Username"
                    type="text"
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`form-control ${
                      errors.username ? "is-invalid" : ""
                    }`}
                  />
                  {errors.username && (
                    <div className="invalid-feedback">{errors.username}</div>
                  )}
                </div>
              </div>
              <div className="form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <FaLock />
                    </span>
                  </div>
                  <input
                    name="password"
                    placeholder="Password"
                    type="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`form-control ${
                      errors.password ? "is-invalid" : ""
                    }`}
                  />
                  {errors.password && (
                    <div className="invalid-feedback">{errors.password}</div>
                  )}
                </div>
              </div>
              <div className="form-group">
                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                  disabled={isSubmitting}
                >
                  Login
                </button>
              </div>
            </form>
          </>
        );
      }}
    </Formik>
  );
};
