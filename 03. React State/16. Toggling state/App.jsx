import React from 'react'

export default function App() {
    /**
     * Challenge: 
     * - Initialize state for `isGoingOut` as a boolean
     * - Make it so clicking the button flips that
     *   boolean value (true -> false, false -> true)
     * - Display "Yes" if `isGoingOut` is `true`, "No" otherwise
     */
    
    const [isGoingOut, setIsGoingOut] = React.useState(true)

    function handleClick() {
        setIsGoingOut(prevIsGoingOut => !prevIsGoingOut)
    }

    return (
        <main>
            <h1 className="title">Do I feel like going out tonight?</h1>
            <button className="value" onClick={handleClick}>{isGoingOut ? "Yes" : "No"}</button>
        </main>
    )
}
