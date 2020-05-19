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
                and I love to code on React. I'm in search of a Developer job, where opportunity for growth and professional development. 
                I want to gain more knowledge and skills to be a better Developer.
                I have attended Bottega tech <a href="https://bottega.tech">https://bottega.tech</a>, and other courses on my free time.
                I enjoy building projects with React, like this website for example, it's built on React.
              </p>
              <h3>My skills</h3>
              <ul>
                  <li>GIT</li>
                  <li>HTML/SCSS</li>
                  <li>Back end Database</li>
                  <li>Analytical Skills</li>
                  <li>Responsive Design</li>
                  <li>Libraties and frameworks</li>
                  <li>Working with Hosting (Publishing web site)</li>
              </ul>
              <p>
                  The Website is not Mobile-Friendly.
              </p>
            </div>
        </div>
    )
}
