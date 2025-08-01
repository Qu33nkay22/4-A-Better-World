import React, { Component } from "react";
import "./GetInvolved.css";
import EventCards from "./EventCards";
import volunteer from "./images/chatPGT-Volunteer.png";
import donate from "./images/chatGPT-Donate.png";
import enroll from "./images/chatGPT-SignUp.png";

class GetInvolved extends Component {
    render() {
        return(
            <div className="page-container">
                <div className="info">
                    <h2>Join in on the Fun!</h2>
                    <p>
                    <b>At For A Better World</b>, we believe learning should be exciting, hands-on, and filled with joy! That’s why our nonprofit hosts a variety of fun and educational events designed to inspire curiosity and connect the community. Our Community <b>Science Fair</b> is a yearly highlight, where young minds and budding scientists get to showcase their creative experiments and inventions. It’s a place where baking soda volcanoes erupt next to solar-powered models, and everyone walks away amazed and inspired by the wonders of science.<br/><br/>

                    We also bring smiles to all ages with our <b>Petting Zoo Days</b>, where kids and families can interact with friendly farm animals while learning about compassion, responsibility, and the importance of caring for all living creatures. And for those with a green thumb—or those just curious to try—our <b>Gardening Workshops</b> offer a chance to dig in the dirt, plant seeds, and learn how to grow delicious fruits and vegetables right at home. These events not only build valuable skills but also bring our community together in a shared mission to nurture the planet and each other.
                    <br/><br/>

                    Want to get involved? Join us at our next event and be part of a movement that’s planting seeds of knowledge and kindness—one fun day at a time! 🌱🌍🧪
                    </p>
                </div>

                <div className="currentEvents">
                    <h3>Upcoming Events</h3>
                    <EventCards/>
                </div>

                <div className="briefDescription">
                
                    <h3>Want To Support Our Cause?</h3>
                    <div className="icon-row">
                        <div className="icons">
                            <img src={volunteer} alt="volunteer logo created by Kailynn using chatgpt" title="volunteer logo created by Kailynn using canva"/>
                            <button><a>Volunteer</a></button>
                        </div>
                        <div className="icons">
                            <img src={donate} alt="donation logo using chatgpt" title="donation logo"/>
                            <button>Donate</button>
                        </div>
                        <div className="icons">
                            <img src={enroll} alt="enroll logo using chatgpt" title="enroll logo"/>
                            <button>Enroll</button>
                        </div>
                    </div>
                
                </div>
            </div>

        )
    }

}

export default GetInvolved;