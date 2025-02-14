import marker from "../images/marker.png"

/**
 * Challenge: Build out the Entry component and render 1 instance of it
 * to the App
 * 
 * For now, just hard-code in the data, which you can find in
 * japan.md so you don't have to type it all out manually :)
 * 
 * Notes:
 * – Only render 1 instance of this Entry component for now
 * – I've pulled in marker.png for the little map marker icon
 *   that goes next to the location name
 * – The main purpose of this challenge is to show you where our limitations
 *   currently are, so don't worry about the fact that you're hard-coding all
 *   this data into the component.
 */


export default function Entry() {
    return (
        <div className="entry">
            <div className="entry-header">
                <div className="location">
                    <img src={marker} alt="map marker" />
                    <span>JAPAN</span>
                </div>
                <a 
                    href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z"
                    target="_blank"
                    rel="noreferrer"
                    className="gray-link"
                >
                    View on Google Maps
                </a>
            </div>
            <h1 className="title">Mount Fuji</h1>
            <p className="dates">12 Jan, 2023 - 24 Jan, 2023</p>
            <p className="description">
                Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). 
                Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.
            </p>
        </div>
    )
}