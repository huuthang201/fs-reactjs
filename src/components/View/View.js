import React, { useState } from "react";

const View = () => {
    const [state, setState] = useState({ clicked: false });
    const handleClick = () => {
        setState({ clicked: !state.clicked });
        console.log(state);
    };
    return (
        <div className="view-container">
            <div> Chế độ xem: </div>
            <div className="view-container__text">
                {state.clicked ? "List" : "Grid"}
            </div>
            <div className="view-container__icon" onClick={handleClick}>
                <i
                    className={state.clicked ? "fas fa-th-list" : "fas fa-th"}
                ></i>
            </div>
        </div>
    );
};

export default View;
