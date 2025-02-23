import React from "react"
import avatar from "./images/user.png"
import starFilled from "./images/star-filled.png"
import starEmpty from "./images/star-empty.png"

export default function Contact({ contact, toggleFavorite }) {
    return (
        <article className="card">
            <img
                src={avatar}
                className="avatar"
                alt={`User profile picture of ${contact.firstName} ${contact.lastName}`}
            />
            <div className="info">
                <button
                    onClick={toggleFavorite}
                    aria-pressed={contact.isFavorite}
                    className="favorite-button"
                >
                    <img
                        src={contact.isFavorite ? starFilled : starEmpty}
                        alt={contact.isFavorite ? "filled star icon" : "empty star icon"}
                        className="favorite"
                    />
                </button>
                <h2 className="name">
                    {contact.firstName} {contact.lastName}
                </h2>
                <p className="contact">{contact.phone}</p>
                <p className="contact">{contact.email}</p>
            </div>
        </article>
    )
} 