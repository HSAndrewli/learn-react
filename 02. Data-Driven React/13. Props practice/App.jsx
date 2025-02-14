/**
 * Challenge: create a page that displays your favorite jokes
 * - Create a Joke component in its own file.
 * - Import and render 4-5 <Joke /> components
 * - Each Joke should receive a "setup" prop and a "punchline" prop
 *   and render those however you'd like
 * - Use your favorite 2-part jokes (setup & punchline), or check
 *   jokes.md file for some examples.
 * 
 * EXTRA CREDIT:
 * Some jokes are only a punchline with no setup:
 * 
 * E.g.: "It's hard to explain puns to kleptomaniacs because 
 * they always take things literally."
 * 
 * If you don't pass in a "question" prop, how might you make it only 
 * show the punchline?
 */

import Joke from './Joke'

export default function App() {
    return (
        <>
            <Joke setup="Why did the chicken cross the road?" punchline="To get to the other side!" />
            <Joke setup="What did the fish say when it swam into a wall?" punchline="Dam!" />
            <Joke setup="Why did the chicken cross the road?" punchline="To get to the other side!" />
            <Joke punchline="It's hard to explain puns to kleptomaniacs because they always take things literally." />
        </>
    )
}