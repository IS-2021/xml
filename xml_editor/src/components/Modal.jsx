import ReactDOM from "react-dom";
import "./Modal.css";
import { useContext } from "react";
import { StateContext } from "../contexts/StateContext.jsx";
import { CLOSE_MODAL } from "../reducers/AppReducer.js";
import CloseIcon from "@mui/icons-material/Close";

function Modal({ children, title, className }) {
    const { state, dispatch } = useContext(StateContext);

    if (!state.isModalOpen) return null;

    function handleModalClose() {
        dispatch({ type: CLOSE_MODAL });
    }

    return ReactDOM.createPortal(
        <>
            <div className="modal__overlay" onClick={handleModalClose}></div>
            <div className={`${className} modal`}>
                <header>
                    <h1>{title}</h1>
                    <button onClick={handleModalClose}>
                        <CloseIcon fontSize="large" />
                    </button>
                </header>
                {children}
            </div>
        </>,
        document.getElementById("portal")
    );
}

export default Modal;
