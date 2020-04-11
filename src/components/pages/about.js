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
                He started his coding journey on an online bootcamp, his fast learner 
                and loves to code. Is looking for a Junior Developer jobs, to gain more knowledge and skills to be great Developer.
                He has attended Bottega tech for a year https://bottega.tech.
                Likes to build projects with React and Svelte, like this website for example, it is built on React.
              </p>
              <p>
                  The Website is not Mobile-Friendly.
              </p>
            </div>
        </div>
    )
}
