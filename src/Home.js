import React, { Component } from "react";
import "./Home.css";

import LearnMore from "./LearnMore";
import img from "./images/pexels-mart-production-classroom.jpg";
import volunteer from "./images/chatPGT-Volunteer.png";
import donate from "./images/chatGPT-Donate.png";
import enroll from "./images/chatGPT-SignUp.png";
import Faq from "./faq";
import percypic from "./images/percy-pastel1.jpg";


class Home extends Component {
    render() {
        return(
            <div className="page-container">
                <div className="hero">
                    <img src={img} alt="classroom from pexeles created by mart production" title="classroom from pexeles created by mart production"/>
                </div>

                <div className="mission">
                    <p>
                        <h2>Our Mission</h2>
                        <b>For A Better World</b> is a nonprofit organization dedicated to educationg and elevating the community to get them engaged with their environment. We strive to provide resources, mentorships and experiences to promote a better world.
                    </p>
                </div>

                <div className="briefDescription">
                    <p>
                        <e>"Education is the most powerful weapon you can use to change the world. - Nelson Mandela</e>
                    </p>
                </div>

                <div className="mission">
                    <p>
                     At For A Better World, we believe that educating youth and young adults is one of the most impactful ways to create a brighter, more sustainable future. Our programs are designed to spark curiosity, build confidence, and empower the next generation with hands-on learning experiences. From environmental education to science and life skills, we provide opportunities that not only teach important concepts but also inspire a deep love for learning and the world around us.<br/><br/>

                    One of the core values we teach is the importance of caring for animals and the planet. Through our wildlife education activities and nature-based experiences, participants learn about ecosystems, conservation, and the role we all play in protecting our environment. Gardening is one of our favorite ways to bring these lessons to life—kids and teens get their hands dirty planting, nurturing, and harvesting their own food, gaining a sense of responsibility, patience, and pride. It’s educational, therapeutic, and a lot of fun!<br/><br/>

                    Science is another cornerstone of our programs, and we make it exciting! Our students engage in all kinds of fun, safe experiments that explore physics, chemistry, biology, and more. Whether it’s building a mini volcano, observing plant growth, or exploring renewable energy, science becomes something they can see, touch, and experience. At For A Better World, learning is not just about information—it’s about connection, creativity, and cultivating a lifelong passion for making a difference.
                    </p>
                </div>

                <div className=".learnMore">
                    <LearnMore/>
                </div>


                <div className="briefDescription">
                    <h3>Want To Support Our Cause?</h3>
                    <div className="icon-row">
                        <div className="icons">
                            <img src={volunteer} alt="volunteer logo created by Kailynn using chatgpt" title="volunteer logo created by Kailynn using canva"/>
                            <button><a href="https://andersonk380.macombserver.net/itwp1450/project1/index.html#/Volunteer">Volunteer</a></button>
                        </div>
                        <div className="icons">
                            <img src={donate} alt="donation logo using chatgpt" title="donation logo"/>
                            <button><a href="https://andersonk380.macombserver.net/itwp1450/project1/index.html#/Donation">Donate</a></button>
                        </div>
                        <div className="icons">
                            <img src={enroll} alt="enroll logo using chatgpt" title="enroll logo"/>
                            <button><a href="https://andersonk380.macombserver.net/itwp1450/project1/index.html#/Enroll">Enroll</a></button>
                        </div>
                    </div>
                </div>
                <div className="faq-section">
                        <Faq />
                </div>

              {/*   <div className="percyEmoji">
                    <img src={percypic}/>
                </div>*/}
            </div> 


            
        );
    }
}

export default Home;