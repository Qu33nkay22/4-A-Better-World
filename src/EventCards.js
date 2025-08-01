import React, { Component } from "react";
import "./EventCards.css";
import scienceFair from "./images/pexels-vanessa-loring-scienceFair.jpg";

import pettingZoo from "./images/pexels-cristian-pettingZoo.jpg";

import gardening from "./images/pexels-cottonbro-gardening.jpg";

import dig from "./images/pexels-tatianasyrikova-dig.jpg";



class EventCards extends Component {
    render() {
        return(
            <div className="event-wrapper">
                <div className="container">
                    <h4>Science Fair</h4>
                    <div className="img-container">
                        <img src={scienceFair} alt="science fair by vanessa loring from pexels" title="science fair by vanessa loring from pexels"/>
                    </div>
                    <div className="text">
                        <p>
                        Join us for our annual Community Science Fair, a fun-filled event for all ages where creativity and curiosity take center stage! Whether you're a young explorer or a lifelong learner, everyone is welcome to showcase their science projects and discoveries. There will be exciting prizes awarded in each age group, so bring your best ideas and experiments! It’s a day of inspiration, learning, and community celebration—don’t miss out! 🧪🌟🔬
                        </p>
                    </div>

                </div>

                <div className="container">
                    <h4>Petting Zoo</h4>
                    <div className="img-container">
                        <img src={pettingZoo} alt="petting zoo by cristian from pexels" title="petting zoo by cristian from pexels"/>
                    </div>
                    <div className="text">
                        <p>
                        Come meet our furry, feathered, and friendly animal friends at our Petting Zoo Event! This hands-on experience is perfect for kids and animal lovers of all ages. Learn fun facts about our animals, how to care for them, and why protecting wildlife matters—all while enjoying up-close encounters in a safe, welcoming environment. It’s a heartwarming day of learning, laughter, and lots of cuddles! 🐐🐰🐓
                        </p>
                    </div>
                </div>

                <div className="container">
                    <h4>Gardening Workshop</h4>
                    <div className="img-container">
                        <img src={gardening} alt="gardening by cottonbro from pexels" title="gardening by cottonbro from pexels"/>
                    </div>
                    <div className="text">
                        <p>
                        Join us for our gardening workshops—hands-on events where participants of all ages can learn sustainable gardening practices, grow their own food, and connect with nature. Whether you're a seasoned gardener or just starting out, our workshops offer practical tips, eco-friendly techniques, and a welcoming space to dig in and grow together. Come plant the seeds for a healthier, greener community!
                        </p>
                    </div>

                </div>

                <div className="container">
                    <h4>Paleontologist Dig</h4>
                    <div className="img-container">
                        <img src={dig} alt="dig by tatianasyrikova from pexels" title="dig by tatianasyrikova from pexels"/>
                    </div>
                    <div className="text">
                        <p>
                        Step into the shoes of a real explorer at our Paleontologist Dig Event! Participants of all ages will get to dig, discover, and uncover ancient "fossils" in a hands-on excavation experience. Learn about dinosaurs, prehistoric life, and the tools scientists use to study the past. It’s a thrilling adventure filled with science, history, and imagination—perfect for curious minds and future paleontologists! 🦖🔍🪨
                        </p>
                    </div>

                </div>
            </div>
        )
    }
}

export default EventCards;