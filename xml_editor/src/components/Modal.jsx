import ReactDOM from "react-dom";
import "./Modal.css";

function Modal({ children, isOpen, onClose }) {
    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <>
            <div className="modal__overlay"></div>
            <div className="modal">
                <button onClick={onClose}>Close</button>
                {children}
            </div>
        </>,
        document.getElementById("portal")
    );
}

export default Modal;