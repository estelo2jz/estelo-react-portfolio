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
              <p><strong>Estelo Abellanosa is a Full Stack Developer</strong></p> 
              <p>with React, Python, and JavaScript.</p>
              <p>
                I started my coding journey on an online bootcamp, I'm a fast learner 
                and I love to code. I'm in search of a Junior Developer job, I want to gain more knowledge and skills to be a better Developer.
                I have attended Bottega tech <a href="https://bottega.tech">https://bottega.tech</a>, and other courses on my free time.
                I enjoy building projects with React and Svelte, like this website for example, it's built on React.
              </p>
              <p>
                  The Website is not Mobile-Friendly.
              </p>
            </div>
        </div>
    )
}
