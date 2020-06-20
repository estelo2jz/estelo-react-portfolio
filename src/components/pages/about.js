import React from "react";
import profilePicture from "../../../static/assets/images/auth/bio/headshot.jpg";

export default function() {
    return (
        <div className="content-page-wrapper">
          <div className="helper-img">
            <div 
                className="left-column"
                style={{
                    background: "url(" + profilePicture + ") no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "flex",
                    justifyContent: "center",
                    margin: "5px",
                    height:  "545px",
                    width: "500px",
                    // alignContent: "center"
                }}
            />
          </div>
            <div className="right-column">
              <p><strong>Estelo Abellanosa is a Full Stack Developer</strong></p> 
              <p>with React, Python, and JavaScript.</p>
              <p>
                Innovative Full Stack Developer with 2 years of experience in building and maintaining websites. 
                Proficient in HTML, SASS, JavaScript, Python, and React, plus modern libraries and frameworks. 
                Passionate about usability and possess the knowledge and working with computer hardware.
                I have attended Bottega tech <a href="https://bottega.tech">https://bottega.tech</a>, and other courses on my free time.
                I enjoy building projects with React, like this website for example, it's built on React.
              </p>
              <h3>My skills</h3>
              <ul>
                  <li>Python</li>
                  <li>HTML/SCSS?JavaScript</li>
                  <li>Back end Database</li>
                  <li>Analytical Skills</li>
                  <li>Responsive Design</li>
                  <li>Computer Skills</li>
                  <li>Hardware Troubleshooting</li>
              </ul>
              <p>
                  The Website is not Mobile-Friendly.
              </p>
            </div>
        </div>
    )
}
