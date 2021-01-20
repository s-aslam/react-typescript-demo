import React from "react";
import { useSelector } from "react-redux";
import { IInitialState } from "../../models";

export const Dashboard: React.FC = () => {
  const currentUser = useSelector((state: IInitialState) => state.currentUser);

  return (
    <>
      <p>Welcome to Dashboard</p>
      <p className="App-link">
        {currentUser?.firstName + " " + currentUser?.lastName}
      </p>
    </>
  );
};
