function Button({ className, text, onClick }) {
    return (
        <button
            onClick={onClick}
            className={`${className} btn justify-center inline-flex items-center px-4 py-2 cursor-pointer select-none`}
        >
            {text}
        </button>
    );
}

export default Button;
