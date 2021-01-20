import { IUser } from "./user";

export interface IInitialState {
  currentUser: IUser | null;
  isAuthenticated: boolean;
};

export interface IAction {
  type: string;
  value: any;
};
