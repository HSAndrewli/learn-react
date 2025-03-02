import React from "react"

export default function App() {
    const [unreadMessages, setUnreadMessages] = React.useState([])
    
    /**
     * Challenge:
     * Only display the <h1> below if there are unread messages
     */
    
    return (
        <div>
            <h1>{unreadMessages.length > 0 ? `You have ${unreadMessages.length} unread messages!` : "No unread messages"}</h1>
        </div>
    )
}
