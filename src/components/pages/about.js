import React from "react";
import profilePicture from "../../../static/assets/images/auth/bio/headshot.jpg";

export default function() {
    return (
      <div className="wrapper">
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
              Innovative Junior Front End Developer with 2 years of experience in building and implementing websites. 
              Proficient in HTML/SASS, JavaScript, NodeJS,  ReactJS, Python, MySQL, JSON, ExpressJS, NightmareJS, PuppeteerJS. 
              I have never worked on a Tech Industry before, I am eager to learn new experiences and languages. 
              I love working with NodeJs and JSON data, It's just something that catches your eyes whenever you get some data.
            </p>
            <h1>My skills</h1>
            <ul>
                <li>Computer Skills</li>
                <li>Hardware Troubleshooting</li>
                <li>Web Scraping</li>
                <li>Data Structures</li>
                <li>MongoDB</li>
                <li>JQuery</li>
                <li>MySQL</li>

            </ul>
            <p>
                The Website is not Mobile-Friendly.
            </p>
          </div>
        </div>
      </div>
    )
}
