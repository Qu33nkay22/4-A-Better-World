import React, { Component } from "react";
import "./Visit.css";
import lake from "./images/lake-ilonaBurschl-pixabay.jpg";
import PhotoCarousel from "./PhotoCarousel";

class Visit extends Component {
    render() {
        return(
            <div className="page-container">
                
                <div className="visit">
                    <div className="location">
                        <h2>Come Visit Us</h2>
                        <ul>
                            <li>1234 Waliby Street</li>
                            <li>Clinton Township</li>
                            <li>Michigan, 48038</li>
                        </ul>
                    </div>
                    
                    <div className="hours-park">
                        <h2>Hours of Operation</h2>
                        <ul>
                            <li><span><b>Park</b></span></li>
                            <li>Monday - Thursday:   6AM-8PM</li>
                            <li>Friday - Saturday:   6AM-10PM</li>
                            <li>Sunday:   8AM-8PM</li>
                        </ul>

                        <div className="center-hours">
                            <ul>
                                <li><span><b>Activity Centers</b></span></li>
                                <li>Monday - Sunday:   8AM-6PM</li>
                            </ul>
                        </div>
                    </div>
                 
                    
                </div>

                <div className="text">
                    <p>
                    Nestled in the heart of nature, our nonprofit’s land is a vibrant sanctuary of discovery, healing, and connection. At the center lies a peaceful lake that mirrors the sky and invites quiet reflection or a scenic paddle. Winding through the trees are miles of nature trails, perfect for birdwatching, walking meditations, and immersive outdoor learning. Our animal sanctuary provides a loving home for rescued wildlife, while our learning centers offer hands-on environmental education for all ages. At the heart of it all, the community center serves as a gathering space where neighbors, volunteers, and visitors come together to share, grow, and build a stronger, more compassionate future.
                    </p>
                </div>

                <div className="activities">
                    <table>
                        <thead><td colSpan={2}>
                                
                                Park Activities
                            </td></thead>
                        <tr>
                            <td>8 Mile Nature Trail</td>
                            <td>Playground</td>
                        </tr>

                        <tr>
                            <td>Kiddie Paleontologist Dig site</td>
                            <td>Community Computer room</td>
                            
                        </tr>

                        <tr>
                            <td>Petting Zoo</td>
                            <td>Walk-through Zoo</td>
                        </tr>

                        <tr>
                            <td>Community Garden Shop</td>
                            <td>Botanical Garden</td>
                        </tr>

                        <tr>
                            <td>Animal Observation Room</td>
                            <td>Canoeing</td>
                        </tr>

                        <tr>
                            <td>Paddle Boating</td>
                            <td>Science Center</td>
                        </tr>

                    </table>

                </div>

                <div>
                    <h4>MEET OUR FRIENDS!</h4>
                    <PhotoCarousel />
                </div>
            </div>
        );
    }
}

export default Visit;