import ReactDOM from "react-dom";
import "./Modal.css";
import CloseIcon from "@mui/icons-material/Close";

function Modal({ children, title, className, isOpen, onClose }) {
    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <>
            <div className="modal__overlay" onClick={onClose}></div>
            <div className={`${className} modal`}>
                <header>
                    <h1>{title}</h1>
                    <button onClick={onClose}>
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
