import React, { Suspense, useEffect, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Header } from "./components/Header";
import Loader from "./components/Loader";

import routes from "./config/routes";

import { IInitialState, IRoutesConfig } from "./models";
import { TOKEN_KEY } from "./config/constant";
import { SET_AUTH } from "./store/actions";

export const App: React.FC = () => {
  const isAuthenticated = useSelector(
    (state: IInitialState) => state.isAuthenticated
  );
  const dispatch = useDispatch();
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    if (localStorage.getItem(TOKEN_KEY)) {
      dispatch({
        type: SET_AUTH,
        value: { firstName: "admin", lastName: "admin" },
      });
      setTimeout(() => {
        setShowLoader(false);
      }, 2000);
    } else {
      setShowLoader(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const menu = routes
    .filter(
      (route: IRoutesConfig) =>
        route.isPrivate === isAuthenticated || route.isStatic
    )
    .map((route: IRoutesConfig) => <Route key={route.id} {...route} />);

  if (showLoader) return <Loader />;
  return (
    <div className="App">
      <Header />
      <div className="main-container">
        <Suspense fallback={<Loader />}>
          <Switch>
            {menu}
            <Redirect from="/" to={isAuthenticated ? "/dashboard" : "/login"} />
          </Switch>
        </Suspense>
      </div>
    </div>
  );
};

export default App;
