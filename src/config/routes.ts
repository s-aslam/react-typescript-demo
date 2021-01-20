import React from "react";
import { createBrowserHistory } from "history";
import { IRoutesConfig } from "../models";

export const history = createBrowserHistory();


const routes: Array<IRoutesConfig> = [
  {
    id: "home",
    path: "/",
    exact: true,
    name: "Home",
    isStatic: true,
    component: React.lazy(() => import('../pages/Home')
      .then(({ Home }) => ({ default: Home }))),
  },
  {
    id: "about-us",
    path: "/about-us",
    exact: true,
    name: "AboutUs",
    isStatic: true,
    component: React.lazy(() => import('../pages/AboutUs')
      .then(({ AboutUs }) => ({ default: AboutUs }))),
  },
  {
    id: "login",
    path: "/login",
    exact: true,
    name: "Login",
    isPrivate: false,
    isStatic: false,
    component: React.lazy(() => import('../pages/Login')
      .then(({ Login }) => ({ default: Login }))),
  },
  {
    id: "404",
    path: "/404",
    exact: true,
    name: "NoPageFound",
    isPrivate: false,
    isStatic: true,
    component: React.lazy(() => import('../pages/404')
      .then(({ NoPageFound }) => ({ default: NoPageFound }))),
  },
  {
    id: "dashboard",
    path: "/dashboard",
    exact: true,
    name: "Dashboard",
    isPrivate: true,
    component: React.lazy(() => import('../pages/dashboard')
      .then(({ Dashboard }) => ({ default: Dashboard }))),
  }
]

export default routes;
