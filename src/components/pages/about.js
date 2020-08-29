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

                      <div className="about-left-bio-container">
                        <div>
                          <p>
                            Innovative Junior Full Stack Developer with 2 years of experience in building and implementing websites.
                            Proficient in HTML/SASS, JavaScript, NodeJS,  ReactJS, MySQL, JSON, ExpressJS, MongoDB, Firebase.
                            I'm eager to learn new experiences and languages.
                          </p>
                          <p>
                            I learned the fundamentals of coding from Bottega tech an online cooding bootcamp. Where i learn how to be a Full Stack Developer.
                            Now I am still kearning differents types of languages and libraries to improve my current Development skills.
                            I was able to build differents types of website, using what I have learn in the bootcamp for 1 year.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>

            <div className="about-right-container">
              <div className="about-right-grid-container">
                <div className="about-right-flex-container">
                  <div className="about-right-boxes">
                    <p>
                      If you have a business and you are looking for a website or web p age.
                      Don't hesitate to contact me,
                      I can design, build, and manage your website from scratch.
                    </p>
                  </div>
                </div>
              <div>
                <div className="about-right-flex-container">
                  <div className="about-right-boxes">
                    <div>
                      <p>My Projects</p>
                    </div>
                    <div className="about-right-list-container">
                      <ul>
                        <il>
                          <a href="https://svelte-razors-store.netlify.app/">
                            Razor
                          </a>
                        </il><strong>-</strong>
                        <il>
                          <a href="https://gummy-stickers.netlify.app/">
                            Code Sticker Shop
                          </a>
                        </il><strong>-</strong>
                        <il>
                          <a href="https://lawnpro.netlify.app/">
                            Grass pro
                          </a>
                        </il><strong>-</strong>
                        <il>
                          <a href="https://barberclone.netlify.app/">
                            Barber Clone
                          </a>
                        </il><strong>-</strong>
                        <il>
                          <a href="https://fakegucci.netlify.app/">
                            Fake Gucci Store
                          </a>
                        </il><strong>-</strong>
                        <il>
                          <a href="https://icydiamond.netlify.app/">
                            Ice Diamond Store
                          </a>
                        </il><strong>-</strong>
                        <il>
                          <a href="https://chinesefood.netlify.app/">
                            Chinese Food
                          </a>
                        </il><strong>-</strong>
                        <il>
                          <a href="https://companycultures.netlify.app/">
                            Top Company Cultures
                          </a>
                        </il><strong>-</strong>
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
      </div>
    )
}