import React from "react"

export default function App() {
    /**
     * Challenge: 
     * Create state to track our count value (initial value is 0)
     * Don't forget to replace the hard-coded "0" with your new state
     */

    const [count, setCount] = React.useState(0)

    function handleClick(event) {
        setCount(count+ 1)
    }

    function handleClickMinus(event) {
        setCount(count - 1)
    }

    return (
        <main className="container">
            <h1>How many times will Bob say "state" in this section?</h1>
            <div className="counter">
                <button className="minus" aria-label="Decrease count" onClick={handleClickMinus}>–</button>
                <h2 className="count">{count}</h2>
                <button className="plus" aria-label="Increase count" onClick={handleClick}>+</button>
            </div>
        </main>
    )
}
