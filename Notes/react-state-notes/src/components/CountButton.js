import React from "react";

const CountButton = props => {
    return (
        <button onClick={props.propUpdateFunc}>Add 1 to the count</button>
    );
}

export default CountButton;