import React, { Component } from "react";
import './LearnMore.css';
import img from "./images/pexels-catchavibe-natureTrail.jpg";
import img2 from "./images/pexels-katerina-holmes-teacherStudent.jpg";


class LearnMore extends Component {
    render() {
        return(
            <div>
                <div className="learnMoreLeft">
                    <img src={img} alt="nature trail from pexels by catchavibe" title="nature trail from pexels by catchavibe"/>
                    <div className="text">
                        <h2>Come visit us in Clinton Township!</h2>
                        <p>
                        Our Clinton Township location is home to a variety of engaging and educational programs designed for learners of all ages. Whether you're a student, parent, teacher, or curious explorer, there's something here for everyone. Our programs run throughout the year and focus on wildlife conservation, environmental science, and hands-on activities that inspire curiosity and care for the planet.
                        Come spend the day with us—it's fun, free, and educational! Take a guided tour, join a workshop, or simply explore our learning spaces. We can’t wait to welcome you! 
                        </p>

                        <button>
                            <a href="https://andersonk380.macombserver.net/itwp1450/project1/index.html#/Visit">Visit Us</a>
                        </button>
                    </div>
                </div>

                <div className="learnMoreRight">
                    <img src={img2} alt="teacher and student in classroom from pexels by Katerina Holmes." title="teacher and student in classroom from pexels by Katerina Holmes."/>
                    <div className="text">
                        <h2>Join Us in Making A Difference!</h2>
                        <p>
                        Be a part of our mission to protect wildlife and inspire the next generation through hands-on educational programs. Whether you're passionate about nature, science, or simply giving back, there's a place for you in our community. Sign up today and help create a brighter, greener future for all! 🌿🦉📚
                        </p>

                        <button>
                            <a href="https://andersonk380.macombserver.net/itwp1450/project1/index.html#/GetInvolved">Sign Up</a>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default LearnMore;