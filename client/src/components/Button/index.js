import React from "react";
import "./style.css";

function Button({ onClick, children }) {
    return (
        <button onClick={onClick} className="btn">
            {children}
        </button>
    );
}

export default Button