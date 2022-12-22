import { useModalWithCallbacks } from "./useModalWithCallbacks.js";
import { useContext } from "react";
import { StateContext } from "../contexts/StateContext.jsx";
import { CLOSE_MODAL, OPEN_MODAL } from "../reducers/AppReducer.js";

export function useModalWithDispatch(initialState) {
    const { dispatch } = useContext(StateContext);

    return useModalWithCallbacks(
        initialState,
        () => dispatch({ type: OPEN_MODAL }),
        () => dispatch({ type: CLOSE_MODAL })
    );
}
