import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./Main";
import "./index.css";
import SocialBar from "./SocialsBar";
import Footer from "./footer/Footer";
import ShareThis from "./ShareThis";

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
    <>
        <SocialBar/>
        <Main/>
        <ShareThis />
        <Footer/>
    </>
);
