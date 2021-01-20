import { TOKEN_KEY } from "../config/constant";
import { IInitialState, IAction } from "../models";
import { PURGE_AUTH, SET_AUTH } from "./actions";

const initialState: IInitialState = {
  currentUser: null,
  isAuthenticated: false
};


const reducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case SET_AUTH:
      return {
        ...state,
        isAuthenticated: true,
        currentUser: action.value,
      };
    case PURGE_AUTH:
      localStorage.removeItem(TOKEN_KEY);
      return {
        ...state,
        isAuthenticated: false,
        currentUser: null,
      };
    default:
      return state
  }
}

export default reducer;
