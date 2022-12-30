import { createContext } from "react";
import { initialAppState, appReducer } from "../reducers/AppReducer.js";
import { useImmerReducer } from "use-immer";

export const StateContext = createContext(initialAppState);

export const StateProvider = ({ children }) => {
    const [state, dispatch] = useImmerReducer(appReducer, initialAppState);

    return <StateContext.Provider value={{ state, dispatch }}>{children}</StateContext.Provider>;
};
