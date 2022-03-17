import React from "react";

const LightSwitch = props => {
    const switchLightOn = event => {
        alert("You turned the light on!");
        // You can use the event object to find out information about the JSX element you clicked!
        alert(`You clicked ${event.target.textContent}`);
        alert(`The class of the button is ${event.target.className}`);
    }
    
    return (
        <button className="myButton" onClick={switchLightOn}>{props.text}</button>
    );
}

export default LightSwitch;