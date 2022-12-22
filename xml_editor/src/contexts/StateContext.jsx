import { createContext, useReducer } from "react";
import { initialAppState, appReducer } from "../reducers/AppReducer.js";

export const StateContext = createContext(initialAppState);

export const StateProvider = ({ children }) => {
    const [state, dispatch] = useReducer(appReducer, initialAppState);

    return <StateContext.Provider value={{ state, dispatch }}>{children}</StateContext.Provider>;
};
