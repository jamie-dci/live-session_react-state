import React from "react";
import LightSwitch from "./components/LightSwitch";

const App = () => {
    const buttonNames = [
        "Button 1",
        "Button 2",
        "Button 3",
        "Button 4",
        "Button 5"
    ]
    
    return (
        // Part 1 Answer
        // <LightSwitch text={"Turn light on!"} />
    
        // Use .map() to render 5x LightSwitch components
        buttonNames.map((str, index) => {
            return <LightSwitch key={index} text={str} />
        })
    );
}

export default App;