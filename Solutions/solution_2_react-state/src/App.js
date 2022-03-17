import React, { useState } from 'react';
import LightSwitch from "./components/LightSwitch";
import Status from "./components/Status";
import "./App.css";

const App = () => {
    let [lightOn, setLightOn] = useState(true);

    const useSwitch = () => {
        // When the useSwitch function is called, we should change "lighOn" to its OPPOSITE
        // To do this, we will use the "setLightOn" function to give "lightOn" its new value...
    
        // Call setLightOn, and the new value of "lightOn" will be NOT lightOn (the opposite of its current value, using the NOT "!" operator)
        setLightOn(!lightOn);

        // ? Alternative solution: use a ternary operator to do the same thing
        // setLightOn(lightOn ? false : true);
    }    

    return (
        <div>
            <LightSwitch update={useSwitch} />
            <Status isLightOn={lightOn} />
        </div>   
    )
}

export default App;