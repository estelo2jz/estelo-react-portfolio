import React from "react";
import profilePicture from "../../../static/assets/images/auth/bio/headshot.jpg";

export default function() {
    return (
        <div className="content-page-wrapper">
            <div 
                className="left-column"
                style={{
                    background: "url(" + profilePicture + ") no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    margin: "5px"
                }}
            />
            <div className="right-column">
              <p><strong>Estelo Abellanosa is Full Stack Developer</strong></p> 
              <p>With React, Python, and JavaScript.</p>
              <p>
                He started his coding journey on an online bootcamp, he is a fast learner 
                and loves to code. Is looking for a entry level develper jobs, to gain more knowledge and be better at building Web Applications.
                He have attended Bottega tech for a year https://bottega.tech.
                Likes to build projects with React and Svelte, like this website for example, it is built on React.
              </p>
            </div>
        </div>
    )
}
