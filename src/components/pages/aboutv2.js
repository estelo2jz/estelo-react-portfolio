import React, { Component } from 'react'

export default class Aboutv2 extends Component {
  render() {
    return (
      <div>
        <div>
          <div>
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
                  height: "245px",
                  width: "200px",
                  // alignContent: "center"
                }}
              />
            </div>
            <div className="right-column">
              <p><strong>Estelo Abellanosa is a Full Stack Developer</strong></p>
              <p>with React, Python, and JavaScript.</p>
              <p>
                Innovative Junior Full Stack Developer with 2 years of experience in building and implementing websites.
                Proficient in HTML/SASS, JavaScript, NodeJS,  ReactJS, Python, MySQL, JSON, ExpressJS, MongoDB, Firebase.
                I am eager to learn new experiences and languages.
            </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
