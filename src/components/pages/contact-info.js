import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import contactpagePicture from "../../../static/assets/images/auth/login.jpg";


export default function() {
  return (
    <div className="contact-flex-container">
      {/* <div className="contact-img">
        <div className="space">
          <div className="contact-bullet-points">
            <h1>Recent Employment History</h1>

              <div className="recent-flex-container">
                <div className="bullet-point-group">
                  <div className="icon">
                      <FontAwesomeIcon icon="user-check" />
                  </div>
                  <div className="text">
                      Merchandiser
                  </div>
                </div>
                <div className="bullet-point-group">
                  <div className="icon">
                    <FontAwesomeIcon icon="map-marked-alt" />
                  </div>
                  <div className="text">
                    ThredUp, Vernon Hills, IL
                  </div>
                </div>
                <div className="bullet-point-group">
                  <div className="icon">
                      <FontAwesomeIcon icon="table" />
                  </div>
                  <div className="text">
                      Janaury 2018 - May 2020
                  </div>
                </div>
              </div>
              <div className="bullet-point-group">
                <ul>
                  <li>Assist in a company initiative / demonstrating sportsmanship, thoughtful problem solving, communication, and recapping.</li>
                  <li>Responsible for auditing inventory based on attributes including gender and season.</li>
                  <li>Strong attention to detail for item accuracy and quality.</li>
                  <li>Styled and photographed clothing, in order to ensure an overall elevate site aesthetic.</li>

                </ul>
              </div>
          </div>
        </div>
      </div> */}

      <div className="right-column">
        <div className="contact-bullet-points">
          <h1>Contact Info</h1>
          
            <div className="contact-grid-container">
              <div className="bullet-point-group">
                <div className="icon">
                    <FontAwesomeIcon icon="phone" />
                </div>
                <div className="text">
                    224-413-6293
                </div>
              </div>
              <div className="bullet-point-group">
                <div className="icon">
                    <FontAwesomeIcon icon="envelope" />
                </div>
                <div className="text">
                    estelo2jz@gmail.com
                </div>
              </div>
              <div className="bullet-point-group">
                <div className="icon">
                    <FontAwesomeIcon icon="map-marked-alt" />
                </div>
                <div className="text">
                    Beach Park, IL
                </div>
              </div>
            </div>

            <div className="contact-grid-container">
              <div className="bullet-point-group">
                <div className="text">
                  <a href="https://github.com/estelo2jz">
                    github
                  </a>
                </div>
              </div>
              <div className="bullet-point-group">
                <div className="text">
                  <a href="https://www.linkedin.com/in/estelo-abellanosa-83a335186/">
                    linkedin
                  </a>
                </div>
              </div>
              <div className="bullet-point-group">
                <div className="text">
                  <a href="https://www.facebook.com/estelo.abellanosa">
                    facebook
                  </a>
                </div>
              </div>
              <div className="bullet-point-group">
                <div className="text">
                  <a href="https://twitter.com/EsteloManitoba">
                    twitter
                  </a>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}
