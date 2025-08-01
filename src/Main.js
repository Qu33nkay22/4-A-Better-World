import React, { Component } from "react";
import {
    Routes,
    Route,
    NavLink,
    HashRouter,
}
from "react-router-dom";
import Home from "./Home";
import GetInvolved from "./GetInvolved";
import Visit from "./Visit";
import AboutUs from "./AboutUs";
import SearchBar from "./SearchBar";
import Volunteer from "./Volunteer";
import DonationPage from "./Donation";
import EnrollmentForm from "./Enroll";

class Main extends Component {
    render() {
        return(
            
            <HashRouter>
                    <ul className="header">
                        <li><NavLink exact to="/">Home</NavLink></li>
                        <li><NavLink to="/GetInvolved">Get Involved</NavLink></li>
                        <li><NavLink to="/Visit">Visit our Facility</NavLink></li>
                        <li><NavLink to="/AboutUs">About us</NavLink></li>
                        <li><NavLink to="/Volunteer">Volunteer</NavLink></li>
                        <li><NavLink to="/Donation">Donate</NavLink></li>
                        <li><NavLink to="/Enroll">Enroll</NavLink></li>
                        <SearchBar/>
                    </ul>
                    <div className="content">
                        <Routes>
                            <Route exact path="/" element={<Home/>} />
                            <Route path="/GetInvolved" element={<GetInvolved/>} />
                            <Route path="/Visit" element={<Visit/>} />
                            <Route path="/AboutUs" element={<AboutUs/>} />
                            <Route path="/Volunteer" element={<Volunteer/>} />
                            <Route path="/Donation" element={<DonationPage/>} />
                            <Route path="/Enroll" element={<EnrollmentForm/>} />
                        </Routes>
                    </div>
            </HashRouter>
        );
    }
}

export default Main;