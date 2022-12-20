function Pill({ idx, text, onClick, rightSpan }) {
    return (
        <div className="pill" onClick={onClick}>
            <p>
                {idx && <span className="pill__number">{idx}</span>}
                <span>{text}</span>
                {rightSpan && <span className="pill_right">{rightSpan}</span>}
            </p>
        </div>
    );
}

export default Pill;
