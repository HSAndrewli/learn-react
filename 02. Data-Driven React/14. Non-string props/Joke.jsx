export default function Joke(props) {
    return (
        <>
            {props.setup && <p className="setup">Setup: {props.setup}</p>}
            <p className="punchline">Punchline: {props.punchline}</p>
            <p className="upvotes">Upvotes: {props.upvotes}</p>
            <p className="downvotes">Downvotes: {props.downvotes}</p>
            <p className="comments">Comments: {props.comments}</p>
            <p className="isPun">Is it a pun? {props.isPun ? "Yes" : "No"}</p>
            <hr />
        </>
    )
}