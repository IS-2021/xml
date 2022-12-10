function Pill({ idx, text }) {
    return <div className="pill">
        <p>
            {idx && <span className="pill__number">{idx}</span>}
            <span>{text}</span>
        </p>
    </div>
}

export default Pill;
