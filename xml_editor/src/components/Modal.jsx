import ReactDOM from "react-dom";
import "./Modal.css";
import { useContext } from "react";
import { StateContext } from "../contexts/StateContext.jsx";
import { CLOSE_MODAL } from "../reducers/AppReducer.js";

function Modal({ children }) {
    const { state, dispatch } = useContext(StateContext);

    if (!state.isModalOpen) return null;

    function handleModalClose() {
        dispatch({ type: CLOSE_MODAL });
    }


    return ReactDOM.createPortal(
        <>
            <div className="modal__overlay"></div>
            <div className="modal">
                <button onClick={handleModalClose}>Close</button>
                {children}
            </div>
        </>,
        document.getElementById("portal")
    );
}

export default Modal;