import pads from "./pads"
import React from "react"
export default function App() {
    /**
     * Challenge part 1:
     * 1. Initialize state with the default value of the
     *    array pulled in from pads.js
     * 2. Map over that state array and display each one
     *    as a <button> (CSS is already written for you)
     *    (Don't worry about using the "on" or "color" 
     *    properties yet)
     */
    const [padArray, setPadArray] = React.useState(pads)
    
    function playSound(id) {
        console.log(id)
    }

    const padElements = padArray.map(pad => (
        <button key={pad.id} className="pad" onClick={() => playSound(pad.id)}>
            {pad.color}
        </button>
    ))
    
    return (
        <main>
            <h1>Sound Pads</h1>
            <p>Click on a pad to play the sound!</p>

            <div className="pad-container">
                {padElements}
            </div>
        </main>
    )
}
