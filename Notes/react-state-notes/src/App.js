// Import the useState hook
import React, { useState } from "react";
import CountButton from "./components/CountButton";

const App = () => {
    // Create a React hook to manage the "count" state variable
    
    // Part A: The name of the variable we want state to manage ("count")
    // Part B: A function, which when called, will UPDATE the variable in a way we choose ("setCount")
    // Part C: The starting value of the "count" variable (0)

    //     A        B                C
    let [count, setCount] = useState(0);
    
    const addOneToCount = () => {
        // Call setCount() to update the "count" state variable
        // Inside the parentheses, define what the new value should be!
        setCount(count + 1);
        console.log("We used the state hook to update the 'count' state variable by 1!");
    }

    return (
        <>
            {/* For this demo, I will not make child components (to save time), although it is the best way! */}
            <CountButton propUpdateFunc={addOneToCount} />
            {/* Question: what will the user see if we update the "count" variable by clicking the button? */}
            <div>{count}</div>
        </>
    );
}

export default App;