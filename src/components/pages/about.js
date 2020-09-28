import React from "react";
import profilePicture from "../../../static/assets/images/auth/bio/headshot2.jpg";

export default function() {
    return (
      <div className="wrapper">
        <div className="content-page-wrapper">
            <div className="about-left-container">
                <div className="about-left-flex-container">
                  <div className="about-left-boxes">
                    <div className="about-left-image">
                      <img src={profilePicture} />
                    </div>
                  </div>
                  <div className="about-left-boxes">
                    <div className="about-left-grid">
                      <p><strong>Estelo Abellanosa is a Junior Full Stack Developer</strong></p>
                      <p>
                        Innovative Junior Full Stack Developer with 2 years of experience in building and implementing websites.
                        Proficient in HTML/SASS, JavaScript, NodeJS,  ReactJS, MySQL, JSON, ExpressJS, MongoDB, Firebase.
                        I'm eager to learn new experiences and languages.
                      </p>
                    </div>
                  </div>
                </div>
            </div>

            <div className="about-right-container">
              <div className="about-right-grid-container">
                <div className="about-right-flex-container">
                  <div className="about-right-boxes">
                    <p>
                      If you have a business and you are looking for a website or web page.
                      Don't hesitate to contact me,
                      I can design, build, and manage your website from scratch.
                    </p>
                  </div>
                </div>
              <div>
                <div className="about-right-flex-container">
                  <div className="about-right-boxes">
                    <p>My Projects</p>
                    <ul>
                      <il>
                        <a href="https://svelte-razors-store.netlify.app/">
                          Razor
                        </a>
                      </il>
                      <il>
                        <a href="https://gummy-stickers.netlify.app/">
                          Code Sticker Shop
                        </a>
                      </il>
                      <il>
                        <a href="https://lawnpro.netlify.app/">
                          Grass pro
                        </a>
                      </il>
                      <il>
                        <a href="https://barberclone.netlify.app/">
                          Barber Clone
                        </a>
                      </il>
                      <il>
                        <a href="https://fakegucci.netlify.app/">
                          Fake Gucci Store
                        </a>
                      </il>
                      <il>
                        <a href="https://icydiamond.netlify.app/">
                          Ice Diamond Store
                        </a>
                      </il>
                      <il>
                        <a href="https://chinesefood.netlify.app/">
                          Chinese Food
                        </a>
                      </il>
                      <il>
                        <a href="https://companycultures.netlify.app/">
                          Top Company Cultures
                        </a>
                      </il>
                      <il>
                        <a href="https://ministore.netlify.app/">
                          Mini Online Store
                        </a>
                      </il>
                    </ul>
                  </div>
                </div>
              </div>
              </div>
            </div>
        </div>
      </div>
    )
}