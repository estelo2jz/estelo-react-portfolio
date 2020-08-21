import React from "react";
import profilePicture from "../../../static/assets/images/auth/bio/headshot2.jpg";

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
              Innovative Junior Full Stack Developer with 2 years of experience in building and implementing websites. 
              Proficient in HTML/SASS, JavaScript, NodeJS,  ReactJS, Python, MySQL, JSON, ExpressJS, MongoDB. 
              I have never worked on a Tech Industry before, I am eager to learn new experiences and languages. 
            </p>
          </div>
        </div>
      </div>
    )
}
