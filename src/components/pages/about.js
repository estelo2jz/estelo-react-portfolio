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
              <p><strong>Estelo Abellanosa is Full Stack Development</strong></p> 
              <p>With React, Python, and JavaScript.</p>
              <p>
                He have not work in this field before, but he am willing to learn 
                and gain more experience throught working and learning at the job.
                He have attended Bottega tech https://bottega.tech/ for a year.
              </p>
            </div>
        </div>
    )
}
